const Authentication = require('../utils/auth');

const requireLogin = (req, res, next) => {
    try {
        const auth = new Authentication();
        var data = auth.verifyAccessToken(req.headers.accesstoken);
        if (data) {
            req.data = data.userId;
            next();
        } else {
            return res.status(401).json({msg: 'Unauthorized'});
        }
    } catch (err) {
        return res.status(500).json({msg: err});
    }
}

module.exports = requireLogin;