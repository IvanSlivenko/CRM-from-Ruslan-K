const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    order: {
        type: Number,
        required: true,
        // unique: true

    },
    // list(name, quantity, cost),
    list: [
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

})

// Унікальність номера замовлення тільки в рамках користувача
orderSchema.index({ user: 1, order: 1 }, { unique: true })

module.exports = mongoose.model('orders', orderSchema)