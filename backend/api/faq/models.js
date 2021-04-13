const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    tags: [{type: String}],
    status: {
        type: String,
        enum: ["Answered", "Unanswered"],
        required: true,
        default: "Unanswered"
    }
})
faqSchema.index({question: 'text'});
exports.FAQ = new mongoose.model('FAQ', faqSchema);