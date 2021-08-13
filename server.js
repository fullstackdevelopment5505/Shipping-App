const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
cors = require('cors');
methodOverride = require('method-override');

const users = require("./routes/users");
const packages = require("./routes/packages");

const app = express();
app.use(cors());

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

if(process.env.NODE_ENV === "development")
{
    // CORS rquests
    app.use("/", (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:5000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
        next();
    });
}

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongodb
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/users", users);
app.use("/packages", packages);

const port = process.env.PORT || 5000;  //process.env.port is Heroku's port if you choose to deplay the app there
app.listen(port, () => console.log("Server up and running on port " + port));