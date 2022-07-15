const joi = require('joi');


module.exports = (data) => {
    const schema = joi.object({
        email: joi.string().min(6).max(255).required().email().messages({
            'any.required': 'ایمیل را وارد کنید .',
            'string.max': 'حداکثر 255 کاراکتر میتوانید استفاده کنید',
            'string.min': 'حداقل کاراکتر قابل استفاده 6 کاراکتر میباشد.',
            'string.email': 'لطفا یک ایمیل صحیح وارد کنید '

        }),
        username: joi.string().required().min(4).max(255).alphanum().messages({
            "any.required": ` نام کاربری وارد نشده است !`,
            'string.max': 'حداکثر 255 کاراکتر میتوانید استفاده کنید',
            'string.min': 'حداقل کاراکتر قابل استفاده 4 کاراکتر میباشد.'

        }),
        password: joi.string().required().min(6).alphanum().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
            'string.min': 'پسورد باید بیشتر از 6 کاراکتر باشد',
            "any.required": ` پسورد وارد نشده است !`

        }),
        confirmPassword: joi.string().valid(joi.ref('password')).required().messages({
            "any.only": "تکرار پسورد باید همانند پسورد باشد",
            "any.required": `تکرار پسورد وارد نشده است !`
        })
    })

    return schema.validate(data)
}