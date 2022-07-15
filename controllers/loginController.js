const loginValidation = require('../utils/loginValidation');
const User = require('../model/user');
const bcrypt = require('bcrypt');

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
                    return res.status(200).json({ msg: "Logged In !" })
                }
            }
        }
    } catch (err) {
        return res.status(400).json(err)
    }




}