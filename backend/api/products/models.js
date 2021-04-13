const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    marketCap: String,
    yearListed: String,
    director: String,
    pbRatio: String,
    peRatio: String,
    indPE: String,
    divYield: String,
    bookValue: String,
    EPS: String,
    ROE: String
});
exports.Stock = new mongoose.model('Stock', stockSchema);
const Stock = new mongoose.model('Stock', stockSchema);

const mutualFundSchema = new mongoose.Schema({
    risk: String,
    NAV: String,
    fundSize: String,
    about: String,
    objective: String,
    taxImplication: String,
    minSIP: String,
    fundStarted: String,
    expRatio: String,
});
exports.MutualFund = new mongoose.model('MutualFund', mutualFundSchema);
const MutualFund = new mongoose.model('MutualFund', mutualFundSchema);

const productSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    about: { 
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    price: {
       type: String,
       required: true, 
    },
    rate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Mutual Fund', "Stocks"],
        required: true
    },
    specifications: {
        type: mongoose.Schema.Types.ObjectId,
        enum: [MutualFund, Stock],
        required: true
    }
});
productSchema.methods.getPayload = async function() {
    var product = this;
    
    var specs;
    if (product.category === "Mutual Fund") {
        specs = await MutualFund.findById(product.specifications);
    }

    if (product.category === "Stocks") { 
        specs = await Stock.findById(product.specifications);
    }

    return {
        id: product.id,
        name: product.name,
        category: product.category,
        specifications: specs
    }
}
exports.Product = new mongoose.model('Product', productSchema);
const Product = new mongoose.model("Product", productSchema);
