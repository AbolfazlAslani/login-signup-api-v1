const joi = require('joi');

module.exports = (data) => {

    const loginSchema = joi.object({
        username: joi.string().required().messages({
            'any.required': 'لطفا یوزر نیم را وارد کنید.'
        }),
        password: joi.string().required().messages({
            'any.required': 'لطفا پسورد را وارد کنید'
        })
    })

    return loginSchema.validate(data)
}