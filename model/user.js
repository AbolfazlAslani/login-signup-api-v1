const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: (true, "لطفا پسورد را وارد کنید"),
        unique: (true, "ایمیل تکراری میباشد.")

    },
    username: {
        type: String,
        required: (true, "لطفا نام کاربری را وارد کنید"),
        unique: (true, "نام کاربری تکراری میباشد.")
    },
    password: {
        type: String,
        required: (true, "لطفا پسورد را وارد کنید")
    },
    date: {
        type: Date,
        default: Date.now,
    }
})


module.exports = User = mongoose.model('User', UserSchema)