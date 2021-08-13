const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const nodemailer = require('nodemailer');

// //Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// //Load User model
const User = require("../models/User");

//@route POST api/users/register
//@desc Register user
//@access Public
router.post("/signup", (req, res) => {

    User.findOne({ email: req.body.email }).then(user => {
        if(user) {
            return res.json({errMessage: "Email already exists"});
        } else {

            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                shippingAddress: "",
                company: "",
                city: "",
                country: "",
                zipCode: "",
                avatar: "",
                authority: 2,
                social_type: "",
                social_id: "",
                shoppingAddress: {
                    fullName: "S7-170442 Bill Max",
                    addressLine1: "95 MAYHILL ST",
                    addressLine2: "UNIT H-170442",
                    city: "SADDLE BROOK",
                    state: "New Jersey",
                    zipCode: "07663",
                    phone: "30226507777"
                }
            });

            newUser
                .save()
                .then(user => {

                    //User matched
                    //Create JWT payload
                    const payload = {
                        _id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        password: user.password,
                        shippingAddress: user.shippingAddress,
                        company: user.company,
                        city: user.city,
                        country: user.country,
                        zipCode: user.zipCode,
                        avatar: user.avatar,
                        authority: user.authority,
                        social_type: user.social_type,
                        social_id: user.social_id,
                        shoppingAddress: {
                            fullName: user.shoppingAddress.fullName,
                            addressLine1: user.shoppingAddress.addressLine1,
                            addressLine2: user.shoppingAddress.addressLine2,
                            city: user.shoppingAddress.city,
                            state: user.shoppingAddress.state,
                            zipCode: user.shoppingAddress.zipCode,
                            phone: user.shoppingAddress.phone
                        }
                    };

                    //Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926     //1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );

                })
                .catch(err => console.log(err));

        }
    });
});

router.post("/verify", (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if(user) {
            return res.json({errMessage: "Email already exists"});
        } else {

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                port: 25,
                auth: {
                    user: 'affilliatemaytem@gmail.com',
                    pass: 'Temitope1'
                    // user: 'pawlbai124@gmail.com',
                    // pass: 'asdf uiOP !@34'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            var code = '';
            for (let i = 0 ; i < 4 ; i++){
                code = code + Math.floor(Math.random()*10);
            }
            let HelperOptions = {
                from: 'Verify Notification',
                to: req.body.email,
                subject: 'Verify Notification',
                text: 'Verfiy Code :' + code,
            };
            transporter.sendMail(HelperOptions, (error, info) => {
                if (!info) {
                    return res.json({errMessage:"Invalid email address"})
                } else {
                    return res.json({success: true, code:code, message:"sent code"});
                }        
            })
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @acess Public
router.post("/login", (req, res) => {

    // //Form validation
    // const {errors, isValid} = validateLoginInput(req.body);

    // //Check validation
    // if(!isValid) {
    //     return res.status(400).json(errors);
    // }

    const email = req.body.email;
    const password = req.body.password;

    //Find user by email
    User.findOne({email}).then(user => {

        //Check if user exists
        if(!user) {
            return res.json({success: false, loginResult: "Email not found"});
        }

        //Check the password
        if(password !== user.password) {
            return  res.json({success: false, loginResult: "Wrong Password"});
        }

        //User matched
        //Create JWT payload
        const payload = {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            shippingAddress: user.shippingAddress,
            company: user.company,
            city: user.city,
            country: user.country,
            zipCode: user.zipCode,
            avatar: user.avatar,
            authority: user.authority,
            social_type: user.social_type,
            social_id: user.social_id,
            shoppingAddress: {
                fullName: user.shoppingAddress.fullName,
                addressLine1: user.shoppingAddress.addressLine1,
                addressLine2: user.shoppingAddress.addressLine2,
                city: user.shoppingAddress.city,
                state: user.shoppingAddress.state,
                zipCode: user.shoppingAddress.zipCode,
                phone: user.shoppingAddress.phone
            }
        };

        //Sign token
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
                expiresIn: 31556926     //1 year in seconds
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        );


    //     //Check password
    //     bcrypt.compare(password, user.password).then(isMatch => {
    //         if(isMatch) {
    //             //User matched
    //             //Create JWT payload
    //             const payload = {
    //                 id: user.id,
    //                 name: user.name
    //             };

    //             //Sign token
    //             jwt.sign(
    //                 payload,
    //                 keys.secretOrKey,
    //                 {
    //                     expiresIn: 31556926     //1 year in seconds
    //                 },
    //                 (err, token) => {
    //                     res.json({
    //                         success: true,
    //                         token: "Bearer " + token
    //                     });
    //                 }
    //             );
    //         } else {
    //             return res
    //                 .status(400)
    //                 .json({passwordincorrect: "Password incorrect"});
    //         }
    //     });
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @acess Public
router.post("/googleLogin", (req, res) => {

    const id = req.body.id;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const avatar = req.body.avatar;

    //Find user by email
    User.findOne({email}).then(user => {

        //Check if user exists
        if(user) {

            //User matched
            //Create JWT payload
            const payload = {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                shippingAddress: user.shippingAddress,
                company: user.company,
                city: user.city,
                country: user.country,
                zipCode: user.zipCode,
                avatar: user.avatar,
                authority: user.authority,
                social_type: user.social_type,
                social_id: user.social_id,
                shoppingAddress: {
                    fullName: user.shoppingAddress.fullName,
                    addressLine1: user.shoppingAddress.addressLine1,
                    addressLine2: user.shoppingAddress.addressLine2,
                    city: user.shoppingAddress.city,
                    state: user.shoppingAddress.state,
                    zipCode: user.shoppingAddress.zipCode,
                    phone: user.shoppingAddress.phone
                }
            };

            //Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926     //1 year in seconds
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
            
        } else {
            //Sign up using gmail info and create jwt token.

            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: "",
                shippingAddress: "",
                company: "",
                city: "",
                country: "",
                zipCode: "",
                avatar: avatar,
                authority: 2,
                social_type: "gmail",
                social_id: id,
                shoppingAddress: {
                    fullName: "S7-170442 Bill Max",
                    addressLine1: "95 MAYHILL ST",
                    addressLine2: "UNIT H-170442",
                    city: "SADDLE BROOK",
                    state: "New Jersey",
                    zipCode: "07663",
                    phone: "30226507777"
                }
            });

            newUser
                .save()
                .then(user => {

                    //User matched
                    //Create JWT payload
                    const payload = {
                        _id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        password: user.password,
                        shippingAddress: user.shippingAddress,
                        company: user.company,
                        city: user.city,
                        country: user.country,
                        zipCode: user.zipCode,
                        avatar: user.avatar,
                        authority: user.authority,
                        social_type: user.social_type,
                        social_id: user.social_id,
                        shoppingAddress: {
                            fullName: user.shoppingAddress.fullName,
                            addressLine1: user.shoppingAddress.addressLine1,
                            addressLine2: user.shoppingAddress.addressLine2,
                            city: user.shoppingAddress.city,
                            state: user.shoppingAddress.state,
                            zipCode: user.shoppingAddress.zipCode,
                            phone: user.shoppingAddress.phone
                        }
                    };

                    //Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926     //1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );

                })
                .catch(err => console.log(err));

        }
    });

});

// @route POST api/users/login
// @desc Login user and return JWT token
// @acess Public
router.post("/facebookLogin", (req, res) => {

    const id = req.body.id;
    const firstName = req.body.firstName;
    const avatar = req.body.avatar;

    //Find user by facebook id
    User.findOne({social_id:id}).then(user => {

        //Check if user exists
        if(user) {

            //User matched
            //Create JWT payload
            const payload = {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                shippingAddress: user.shippingAddress,
                company: user.company,
                city: user.city,
                country: user.country,
                zipCode: user.zipCode,
                avatar: user.avatar,
                authority: user.authority,
                social_type: user.social_type,
                social_id: user.social_id,
                shoppingAddress: {
                    fullName: user.shoppingAddress.fullName,
                    addressLine1: user.shoppingAddress.addressLine1,
                    addressLine2: user.shoppingAddress.addressLine2,
                    city: user.shoppingAddress.city,
                    state: user.shoppingAddress.state,
                    zipCode: user.shoppingAddress.zipCode,
                    phone: user.shoppingAddress.phone
                }
            };

            //Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926     //1 year in seconds
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
            
        } else {
            //Sign up using gmail info and create jwt token.

            const newUser = new User({
                firstName: firstName,
                lastName: "",
                email: "",
                password: "",
                shippingAddress: "",
                company: "",
                city: "",
                country: "",
                zipCode: "",
                avatar: avatar,
                authority: 2,
                social_type: "facebook",
                social_id: id,
                shoppingAddress: {
                    fullName: "S7-170442 Bill Max",
                    addressLine1: "95 MAYHILL ST",
                    addressLine2: "UNIT H-170442",
                    city: "SADDLE BROOK",
                    state: "New Jersey",
                    zipCode: "07663",
                    phone: "30226507777"
                }
            });

            newUser
                .save()
                .then(user => {

                    //User matched
                    //Create JWT payload
                    const payload = {
                        _id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        password: user.password,
                        shippingAddress: user.shippingAddress,
                        company: user.company,
                        city: user.city,
                        country: user.country,
                        zipCode: user.zipCode,
                        avatar: user.avatar,
                        authority: user.authority,
                        social_type: user.social_type,
                        social_id: user.social_id,
                        shoppingAddress: {
                            fullName: user.shoppingAddress.fullName,
                            addressLine1: user.shoppingAddress.addressLine1,
                            addressLine2: user.shoppingAddress.addressLine2,
                            city: user.shoppingAddress.city,
                            state: user.shoppingAddress.state,
                            zipCode: user.shoppingAddress.zipCode,
                            phone: user.shoppingAddress.phone
                        }
                    };

                    //Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926     //1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );

                })
                .catch(err => console.log(err));

        }
    });

});

module.exports = router;