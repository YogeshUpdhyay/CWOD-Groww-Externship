const mongoose = require("mongoose");
const { Product } = require("../products/models");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    orderSpecs: {
        quantity: Number,
        orderType: {
            type: String,
            enum: ['Buy', 'Sell'],
        },
        investType: {
            type: String,
            enum: ["SIP", "OneTime"]
        },
        sipAmount: Number
    },
    orderTime: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['OnGoing', 'Failed', 'Completed'],
        default: 'OnGoing'
    }
});
orderSchema.methods.getPayload = async function() {
    var order = this;
    var product = await Product.findById(order.productId);
    var response = {
        id: order.id,
        userId: order.userId,
        product: product,
        orderSpecs: order.orderSpecs,
        status: order.status
    }
    return response;
}
exports.Order = new mongoose.model('Order', orderSchema);