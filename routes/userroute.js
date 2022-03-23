const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.post('/', (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    User.addUser(user, (err, result) => {
        if (err) {
            return res.json({ success: false, message: err })
        }
        return res.json({ success: true, message: result })
    })
})

router.post('/login', (req, res) => {
    User.login(req.body.email, req.body.password, (err, result) => {
        if (err) {
            return res.json({ success: false, message: err })
        }
        return res.json({ success: true, message: res })
    })
})
module.exports = router;