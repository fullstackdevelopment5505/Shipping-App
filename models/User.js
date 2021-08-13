const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    shippingAddress: {
        type: String,
        default: "Your shipping address"
    },
    company: {
        type: String,
        default: "Your company"
    },
    city: {
        type: String,
        default: "Your city"
    },
    country: {
        type: String,
        default: "Your country"
    },
    zipCode: {
        type: String,
        default: "Your zipCode"
    },
    avatar: {
        type: String,
        default: "Your avatar url"
    },
    authority: {
        type: Number,
        default: 2  // 0: super-admin, 1:admin, 2:user
    },
    date: {
        type: Date,
        default: Date.now
    },
    social_type: {
        type: String,
        default: ""     //none: original, gmail: gmail-login, facebook: facebook-login
    },
    social_id: {
        type: String,
        default: ""      //none: original, gmail-id or facebook-id
    },
    shoppingAddress: {
        fullName: {
            type: String,
            default: "S7-170442 Bill Max"
        },
        addressLine1: {
            type: String,
            default: "95 MAYHILL ST"
        },
        addressLine2: {
            type: String,
            default: "UNIT H-170442"
        },
        city: {
            type: String,
            default: "SADDLE BROOK"
        },
        state: {
            type: String,
            default: "New Jersey"
        },
        zipCode: {
            type: String,
            default: "07663"
        },
        phone: {
            type: String,
            default: "30226507777"
        }
    }
});

module.exports = User = mongoose.model("users", UserSchema);