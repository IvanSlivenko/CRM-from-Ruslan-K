const User = require('../models/User')

module.exports.login = function(req, res) {
    res.status(200).json({
        // login: 'from controller',
        login: {
            email: req.body.email,
            password: req.body.password
        }
        // login: req.body
    })
}

module.exports.register = function (req, res) {
    // res.status(200).json({
    //     register: 'from controller'
    // })

const user = new User({
    email: req.body.email,
    password: req.body.password
})
    user.save().then(()=>{console.log('User created')})

}