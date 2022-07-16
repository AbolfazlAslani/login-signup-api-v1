const loginValidation = require('../utils/loginValidation');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async(req, res) => {
    try {

        if (loginValidation(req.body).error) {
            return res.status(400).json(loginValidation(req.body).error.details[0].message)
        } else {
            const usernameExist = await User.findOne({ username: req.body.username });

            if (!usernameExist) {
                return res.status(400).json({ msg: "incorrect username" });
            } else {
                const bcryptPasswordValidation = await bcrypt.compare(req.body.password, usernameExist.password)
                if (!bcryptPasswordValidation) {
                    return res.status(400).json({ msg: "incorrect password" })
                } else {

                    //creating a jwt token
                    const token = jwt.sign({ _id: usernameExist._id }, process.env.TOKEN_SECRET)

                    res.header('auth-token', token).json({
                        msg: "You Have Succesfully Logged in !",
                        yourToken: token
                    })

                }
            }
        }
    } catch (err) {
        return res.status(400).json(err)
    }




}