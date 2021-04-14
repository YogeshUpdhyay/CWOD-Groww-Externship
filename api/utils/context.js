const Authentication = require('./auth');
const { User } = require('../auth/models');
const { Order } = require('../orders/models');
const models = require('../products/models');

class Context {
    constructor(){};

    // page ids to tags
    pageIdtoTag = {
        "stocks": ["stocks"],
        "mutual-funds": ["mutualfund"],
        "orders": ["orders"],
        'stock': ["stocks"],
        'mutual-fund': ["mutualfund"],
        'order': ['orders']
    };

    // get context parameters from req object
    async generateContext(req) {
        // Defining context
        var context = {}

        var user = null;
        if (req.headers.accesstoken) {
            const auth = new Authentication();
            const data = auth.verifyAccessToken(req.headers.accesstoken);

            if (data) {
                user = await User.findById(data.userId);
                context.user = user;
            }
        }
        
        if (req.query.pageId == "stock" || req.query.pageId == 'mutual-fund') {
            try {
                let product = await models.Product.findById(req.query.productId)
                if (product) {
                    context.product = await product.getPayload() 
                }
            } catch (err) {
                
            }
            
        }

        if (req.query.pageId == 'order') {
            try {
                var order = await Order.findById(req.query.orderId)
                if (order) {
                    context.order = await order.getPayload()
                }
            } catch (err) {
                
            }
            
        }

        if (req.query.pageId) {
            context.pageTag = this.pageIdtoTag[req.query.pageId];
        }
        
        return context;
    }

    // mapping context to tags
    async mapContextToTags(context) {
        var tags = [];

        if (!context.user) {
            tags.push("accountcreation");
        } else {
            if (!context.user.kycStatus) {
                tags.push("kyc");
            }
            if (Order.find({userId: context.user.userId}).length === 0) {
                tags.push("orders");
            }
        }

        if (context.product) {
            tags.push(context.product.name.toLowerCase().replace(/\s+/g, ""))
        }

        if (context.order) {
            tags.push(context.order.product.name.toLowerCase().replace(/\s+/g, ""))
            if (context.order.status === "OnGoing") {
                tags.push("ongoingorder")
            }

            if (context.order.status === "Failed") {
                tags.push("failedorder")
            }
        }

        if (context.pageTag) {
            tags = [...tags, ...context.pageTag]
        }
        
        return tags;
    }
}

module.exports = Context;