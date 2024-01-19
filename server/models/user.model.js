const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (admin.isModified('password')) {
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
    }
    next();
});

module.exports = mongoose.model('user', userSchema);
//oioioioio