const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PackageSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    packagePicture: {
        type: String,
        default: ""
    },
    trackingNo: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    quantity: {
        type: Number,
        default: 1
    },
    date1: {
        type: Date,
        default: Date.now
    },
    date2: {
        type: String,
        default: "-"
    },
    status: {
        type: String,
        default: "PENDING"
    },
    items: [
        {
            url: {
                type: String,
                default: "amazon.com"
            },
            itemName: {
                type: String,
                default: ""
            },
            description: {
                type: String,
                default: ""
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number,
                default: 1.0
            },
            status: {
                type: String,
                default: "PENDING"
            },
        }
    ],
    attachFiles: [
        {
            category: {
                type: String,
                default: "image"    //image, video
            },
            location: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = User = mongoose.model("packages", PackageSchema);