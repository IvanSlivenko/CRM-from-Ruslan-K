const bcrypt = require('bcryptjs')
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

module.exports.register = async function (req, res) {
    // res.status(200).json({
    //     register: 'from controller'
    // })

// const user = new User({
//     email: req.body.email,
//     password: req.body.password
// })
//     user.save().then(()=>{console.log('User created')})

    const candidate = await User.findOne({
        email: req.body.email
    })
if(candidate){
    // Користувач існує, потрібно відправити помилку
    res.status(409).json({
        message: ` Користувач з email : ${candidate} вже існує, спробуйте інший email`
    })
    } else {
    //потрібно створити користувача

    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
})
    try {
        await user.save()
        res.status(201).json({
            message: `Створено користувача ${user}`
        })
    }catch (e){
        // Опрацювати помилку

    }



    // user.save().then(()=>{console.log(`User ${user} created`)})

}



}