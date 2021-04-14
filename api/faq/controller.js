const models = require('./models');
const Context = require('../utils/context');
const { model } = require('mongoose');
const productModels = require('../products/models');

exports.getFAQ = async (req, res) => {
    try {
        var faq = await models.FAQ.findById(req.params.id);
        if (faq) {
            res.status(200).json(faq);
        } else {
            res.status(404).json({msg: 'Not Found'});
        }
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}

async function faqBasedOnContext(req, res) {
    const contextManager = new Context();
    const context = await contextManager.generateContext(req);
    const tags = await contextManager.mapContextToTags(context);
    console.log(tags)
    const faqs = await models.FAQ.find({tags: {'$in': tags}, status: "Answered"})
        .limit(5);
    if (faqs.length > 0) {
        return({
            faqs: faqs,
            reply: null
        });
    } else {
        return({
            faqs: null,
            reply: null
        });
    }
}

exports.getAllFAQ = async (req, res) => {
    try {

        if (req.query.type == "Unanswered") {
            const faqs = await models.FAQ.find({status: "Unanswered"})
            res.json(faqs).status(200)
            return;
        }
        
        if (req.query.message) {
            const reply = await models.FAQ.findOne({question: req.query.message, status: "Answered"});
            if (reply) {
                res.json({
                    faqs: null,
                    reply: reply
                })
                return;
            }
            
            const faqs = await models.FAQ.find({$text: {$search: req.query.message}, status: "Answered"})
                .sort( { score: { $meta: "textScore" } } )
                .limit(5);
            if (faqs.length > 0) {
                res.json({
                    faqs: faqs,
                    reply: null
                })
            } else {
                res.json({
                    faqs: null,
                    reply: null
                });
            }
        } else {
            var response = await faqBasedOnContext(req);
            res.json(response);
        }
    } catch (e) {
        console.log(e.name);
        res.status(500).json({msg: "Server Error"})
    }
}

exports.raiseFAQTicket = async (req, res) => {
    try {
        var status = "Unanswered";
        if (req.body.answer) {
            status = "Answered"
        }
        const newFaq = new models.FAQ({ ...req.body, status: status});
        await newFaq.save();
        res.status(201).json({msg: "Created"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

exports.updateFAQ = async (req, res) => {
    try {
        var faq = await models.FAQ.findByIdAndUpdate(
            req.params.id,
            {   
                question: req.body.question,
                answer: req.body.answer,
                tags: req.body.tags,
                status: "Answered"
            }
        );
        res.status(200).json({msg: "Updated"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

exports.getFaqTags = async (req, res) => {
    try {
        let allTags = [];

        let faqs = await models.FAQ.find({}).select("tags");
        
        faqs.forEach((faq) => {
            allTags = [...allTags, ...faq.tags]
        })

        let products = await productModels.Product.find({}).select("name")
        products.forEach((product) => {
            allTags.push(product.name.toLowerCase().replace(/\s+/g, ""))
        })

        allTags = [...new Set(allTags)]

        res.status(200).json({tags: allTags})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }  
}

exports.createFAQ = async (req, res) => {
    try {
        const newFaq = new models.FAQ(req.body, {status: "Answered"});
        await newFaq.save();
        res.status(201).json({msg: "Created"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}