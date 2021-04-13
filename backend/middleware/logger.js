const moment = require('moment');

const logger = (req, res, next) => {
    res.on('finish', () => {
        if (res.statusCode/100 >= 2 && res.statusCode/100 <= 3) {
            console.log(`${moment().format()}: ${req.method} \x1b[32m${res.statusCode}\x1b[0m ${req.originalUrl}`);
        } else {
            console.log(`${moment().format()}: ${req.method} \x1b[31m${res.statusCode}\x1b[0m ${req.originalUrl}`);
        }
    })
    next();
}

module.exports = logger;