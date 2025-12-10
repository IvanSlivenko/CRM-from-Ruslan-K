const Order = require('../models/Order')
const errorHandler  = require('../utils/errorHandler')

//(get) localhost:5000/api/order?offset=2&limit=5
module.exports.getAll = async function (req, res) {
    const query = {}

    try{

        const order = await  Order
            .find(query)
            .sort({date: -1})
            .skip(+req.query.offset)
            .limit(+req.query.limit)
    }
    catch(e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function (req, res) {
    try{
        const lastOrder = await Order
            // .findOne({user: req.user.id})
            .findOne({user: req.user._id})
            .sort({date: -1})

        const maxOrder = lastOrder ? lastOrder.order : 0

        const order = await new Order({
            list: req.body.list,
            // user: req.user.id,
            user: req.user._id,
            order: maxOrder + 1
        }).save()
        res.status(200).json(order)
    }catch (e) {
        errorHandler(res, e)
    }

}

// module.exports.getById = function (req, res) {
//
// }
//
// module.exports.remove = function (req, res) {
//
// }
//
//
// module.exports.update = function (req, res) {
//
// }