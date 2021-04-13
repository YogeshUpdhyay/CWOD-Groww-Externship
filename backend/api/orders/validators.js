const { Joi, validate } = require('express-validation');

const placeOrderPostIn = {
    headers: Joi.object({
        accesstoken: Joi.string()
            .required()
    }),
    body: Joi.object({
        productId: Joi.string()
            .required(),
        orderSpecs: Joi.object({
            quantity: Joi.number()
                .integer(),
            orderType: Joi.string()
                .valid('Buy','Sell'),
            investType: Joi.string()
                .valid("SIP", "OneTime"),
            sipAmount: Joi.number()
                .integer()
        })
    })
}
exports.palceOrderPostInValidator = validate(placeOrderPostIn, {}, {allowUnknown: true})

const updateOrderStatusPutIn = {
    params: Joi.object({
        id: Joi.string()
            .required(),
    }),
    body: Joi.object({
        status: Joi.string()
            .valid("Completed", "Failed")
            .required()
    })
}
exports.updateOrderStatusValidator = validate(updateOrderStatusPutIn, {}, {allowUnknown: true})