const { Joi, validate } = require('express-validation');

const registerPostIn = {
    headers: Joi.object({
        name: Joi.string()
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
        role: Joi.string()
    })
}
exports.registerValidation = validate(registerPostIn, {}, {allowUnknown: true})

const loginPostIn = {
    headers: Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
    })
}
exports.loginValidation = validate(loginPostIn, {}, {allowUnknown: true})