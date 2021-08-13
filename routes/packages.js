const express = require("express");
const router = express.Router();

// //Load User model
const Package = require("../models/Package");

//@route POST api/users/register
//@desc Register user
//@access Public
router.post("/submitNewOrder", (req, res) => {

    const newOrder = new Package({
        owner: req.body.owner,
        trackingNo: req.body.trackingNo,
        description: req.body.description,
        quantity: req.body.quantity
    });

    newOrder
        .save()
        .then(order => {
            res.json({success: true, result:"New Order was submitted successfully!"});
        })
        .catch(err => console.log(err));

});

module.exports = router;