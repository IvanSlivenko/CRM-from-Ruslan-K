const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login =  async function(req, res) {
    // var 1
    // //----------------------------------------------
    // res.status(200).json({
    //     // login: 'from controller',
    //     login: {
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    //     // login: req.body
    // })
    // //----------------------------------------------

    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
       // Перевіряємо пароль
       const passwordResult = await bcrypt.compareSync(req.body.password, candidate.password)
        if(passwordResult) {
            //Генеруємо токен, паролі співпали
            const token = jwt.sign({
                email: candidate.email,
                // userId: candidate.userId,
                userId: candidate._id

            },keys.jwt, {expiresIn: 60*60})

            res.status(200).json({
                token: `Bearer ${token}`
            })

        } else {
            // Паролі не співпали
            res.status(401).json({
                message: 'Паролі не співпадають, спробуйте знову'
            })
        }

    } else {
        // користувача не має
        res.status(404).json({
            message: `Користувача з таким email не знайдено`
        })
    }



}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({
        email: req.body.email
    })
if(candidate){
    // Користувач існує, потрібно відправити помилку
    res.status(409).json({
        message: ` Користувач з таким email  вже існує, спробуйте інший email`
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
        errorHandler(res, e)

    }


}



}