const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})
const User = mongoose.model('User', userSchema)

// save data of user
User.addUser = function (user, cb) {
    user.save((err, user) => {
        if (err) {
            return cb('failed to load')
        } else {
            cb(null, 'user added')
        }
    })
}

User.login = function (email, password, cb) {
    User.findOne({ email: email }), (err, user) => {
        if (err) {
            console.log(err);
            cb('server Error')
        } else if (user == undefined) {

            cb('user not found')
        } else {
            if (password == user.password)
                cb(null, 'user login successfull')
        }
    }
}

module.exports = User;