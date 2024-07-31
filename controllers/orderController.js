const myRepository = require('../repository/orderRepository');

const GetOrder = (async (req, res) => {
    try {
        const users = await myRepository.GetOrder();
        console.log('Router got data from orderRepository', users);
        res.status(200).json(users);
    } catch (err) {
        console.log('Error while calling GetOrder()', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
// ----------------------------------------------------------------------------------------------------------------------------------userId, officesId, orderDate

const CreateOrder = (async (req, res) => {
    try {
        let x = await myRepository.CreateOrder(req.body.userId, req.body.officesId, req.body.orderDate);
        console.log('Router got data from orderRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log(err);
        // res.json('there was an error while calling myRepository.CreateOrder()', err);
    }
})
module.exports.CreateOrder = CreateOrder;
// ----------------------------------------------------------------------------------------------------------------------------------
const UpdateOrder = async (req, res) => {
    try {
        const result = await myRepository.UpdateOrder(req.params.orderId, req.body.userId, req.body.officesId, req.body.orderDate);
        console.log('Router got data from orderRepository', result);
        res.status(200).json(result);
    } catch (err) {
        console.log('Error while calling UpdateOrder()', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// ----------------------------------------------------------------------------------------------------------------------------------
const DeleteOrder = (async (req, res) => {
    try {
        let x = await myRepository.DeleteOrder(req.params.orderId)
        console.log('Router got data from orderRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log('there was an error while calling orderRepository.DeleteOrder()', err);

    }
});
module.exports.DeleteOrder = DeleteOrder;
// ========================================================================================================
module.exports = {
    GetOrder,
    CreateOrder,
    UpdateOrder,
    DeleteOrder
};
