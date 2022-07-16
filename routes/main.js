const express = require('express');

const route = new express.Router();

route.get('/', (req, res) => {

    res.status(200).json({

        msg: "Welcome to Login And Signup Api make GET methodes to this links for instruction",
        loginRoute: "http://localhost:3000/api/v1/login",
        signupRoute: "http://localhost:3000/api/v1/signup"
    })
})

module.exports = route;