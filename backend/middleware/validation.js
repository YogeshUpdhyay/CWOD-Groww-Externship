const { ValidationError } = require('express-validation');

const validation = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    console.log(err);
    return res.status(500).json(err)
}

module.exports = validation;