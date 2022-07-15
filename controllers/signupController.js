const User = require('../model/user');
const joiValidation = require('../model/validation');
const bcrypt = require('bcrypt');

module.exports = async(req, res) => {
    try {
        const newUser = await new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        const data = req.body
        if (joiValidation(data).error) {
            // that means we  have errors  

            return res.status(400).json(joiValidation(data).error.details[0].message)

        } else {
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(newUser.password, salt);
            await newUser.save();
            return res.status(200).json({
                message: "SignUp Done !",
                databaseDocument: newUser
            })
        }

    } catch (err) {
        if (err.keyValue.username == req.body.username) {
            return res.status(400).json("نام کاربری تکراری میباشد")
        } else if (err.keyValue.email == req.body.email) {
            return res.status(400).json("ایمیل مورد نظر تکراری میباشد")
        } else {
            return res.status(400).json(err)
        }
    }
}