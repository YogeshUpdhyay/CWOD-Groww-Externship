const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    kycStatus: {
        type: Boolean,
        default: false
    }
});
userSchema.methods.setPasswordAndSave = async function(password) {
    var user = this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            user.password = hash;
            user.save();
        });
    });
}
userSchema.methods.verifyPassword = async function(password) {
    var user = this;
    var verify = await bcrypt.compare(password, user.password);
    return verify;
}
exports.User = mongoose.model('User', userSchema);
// module.exports = User;