const models = require('./models');

exports.getOrder = async(req, res) => {
    var order = await models.Order.findById(req.params.id);
    if(!order) {
        res.status(404).send({msg: 'Not Found'});
    } else {
        order = await order.getPayload();
        res.status(200).send(order);
    }
}

exports.getAllOrder = async(req, res) => {
    try {
        var orders = await models.Order.find({userId: req.data});
        var response = []
        for (var i = 0; i < orders.length; i++) {
            var payload = await orders[i].getPayload();

            if (payload.product.category == req.query.category) {
                response.push(payload)
            }
        }
        res.status(200).json(response);
    } catch (e) {
        console.log(e.name);
        res.status(500).json({msg: "Server Error"});
    }
}

exports.placeOrder = async(req, res) => {
    try {
        const newOrder = new models.Order({
            userId: req.data,
            productId: req.body.productId,
            orderSpecs: req.body.orderSpecs
        });
        await newOrder.save();
        res.status(201).json({msg: "Success"});
    } catch (err) {
        res.status(500).json({msg: err});
    }
}

exports.updateOrderStatus = async(req, res) => {
    try {
        var order = await models.Order.findByIdAndUpdate(req.params.id, {status: req.body.status});
        res.status(200).json({msg: "Success"});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}