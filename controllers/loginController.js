const loginValidation = require('../utils/loginValidation');
const User = require('../model/user');


module.exports = async(req, res) => {

    try {
        if (loginValidation(req.body).error) {
            return res.status(400).json(loginValidation(req.body).error.details[0].message)
        } else {
            const usernameExist = await User.findOne({ username: req.body.username });
            if (!usernameExist) {
                res.status(400).json({ msg: "username or password is incorrect" });
            } else {
                res.status(200).json({ msg: "Your Username Is Correct!" })
            }
        }
    } catch (err) {
        res.status(400).json(err)
    }




}