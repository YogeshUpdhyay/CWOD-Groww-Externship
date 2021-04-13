const models = require('./models');

exports.createProduct = async(req, res) => {
    try {
        var specifications;
        if (req.body.category === "Mutual Fund") {
            specifications = new models.MutualFund(req.body.specifications);
        } else {
            specifications = new models.Stock(req.body.specifications);
        }
        await specifications.save();

        req.body.specifications = specifications
        const product = new models.Product(req.body);
        await product.save();
        res.status(201).json({msg: "Created"});
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: err.message});
    }


}

exports.fetchProduct = async(req, res) => {
    try{
        let product = await models.Product.findById(req.params.id);
        var response = await product.getPayload();
        res.json(response);
    } catch (e) {
        // if product is not found or the id is wrong
        if (e.name == "CastError" || e.name == "TypeError") {
            res.status(404).json({msg: "Not Found"})
        } else {
            res.status(500).json({msg: "Server Error"})
        }
    }
}

exports.fetchAllProduct = async(req, res) => {
    try {
        var products = await models.Product.find({category: req.query.category});
        for(var i = 0; i < products.length; i++) {
            products[i] = await products[i].getPayload();
        }
        res.json(products);
    } catch (e){
        console.log(e.name);
        res.status(500).json({msg: "Server Error"});
    }
}

exports.updateProduct = async(req, res) => {
    try {
        models.Product.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json({msg: 'Success'}));
    } catch (err) {
        console.log(err.name);
        res.status(500).json({msg: "Server Error"});
    }  
}