const { User } = require('./models');
const Authentication = require('../utils/auth')

exports.regsiterUser = async(req, res) => {
    // registers a new user and issues a jwt access token
    // headers: email, password, name
    try {
        var { email, password } = req.headers;
        var user = await User.findOne({ email: email});

        if(!user){
            user = new User(req.headers);
            await user.setPasswordAndSave(password);

            // auto login on register
            const auth = new Authentication();
            const data = {
                userId: user.id,
                role: user.role
            }
            const token = auth.createAccessToken(data);
            res.status(200).json({token: token, name: user.name, email: user.email});
        } else {
            res.status(409).json({msg: "Conflict"});
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({msg: err});
    }
    
}

exports.loginUser = async(req,res) => {
    // logs in a new user by issuing a access token
    // headers: email, password 
    try {
        var {email, password} = req.headers;
        var user = await User.findOne({email: email});
        if(!user) {
            res.status(404).json({msg: "Not Found"});
        } else {
            if (await user.verifyPassword(password)) {
                const auth = new Authentication();
                const data = {
                    userId: user.id,
                    role: user.role
                }
                const token = auth.createAccessToken(data);
                res.status(200).json({token: token, name: user.name, email: user.email});
            } else {
                res.status(401).json({msg: "Unauthorized"});
            }
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({msg: e})
    }
}

exports.logoutUser = async(req,res) => {
    res.json({msg: "Success"});
}

exports.updateKycStatus = async(req,res) => {
    try{
        var user = await User.findByIdAndUpdate(req.data, {kycStatus: true});
        res.status(200).json({msg: "Success"});
    } catch(e) {
        console.log(e);
        res.status(500).json({msg: "Server Error"});
    }
}