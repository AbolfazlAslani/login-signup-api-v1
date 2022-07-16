const express = require('express');
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');

const router = new express.Router();

router.post('/login', loginController)
router.get('/signup', (req, res) => {
    res.status(200).json({

        msg: "You Can Sign up With this Structre ",
        "email": "email@email.com",
        "username": "username",
        "pasword": "123456",
        "confirmPassword": "123456",
        "msg2": "Don't Forget the Post Method ;)"

    })
})
router.post('/signup', signupController)


module.exports = router;