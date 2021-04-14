const { Joi, validate, ValidationError } = require('express-validation');

const raiseFAQTicket = {
    headers: Joi.object({
        accesstoken: Joi.string()
            .required()
    }),
    body: Joi.object({
        question: Joi.string()
            .required(),
        answer: Joi.string(),
        tags: Joi.array()
    })
}
exports.raiseTicketValidator = validate(raiseFAQTicket, {}, {allowUnknown: true})

const updateFAQ = {
    headers: Joi.object({
        accesstoken: Joi.string()
            .required()
    }),
    body: Joi.object({
        question: Joi.string()
            .required(),
        answer: Joi.string()
            .required(),
        tags: Joi.array()
    })
}
exports.updateFAQValidator = validate(updateFAQ, {}, {allowUnknown: true})