const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const validation = require('./middleware/validation');
var cors = require('cors');

app = express()

// CONNECTING TO DB
function dbInit() {
    mongoose.connect(process.env.DBURI || 'mongodb://root:example@localhost:27017/ExternDB?authSource=admin&w=1', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DATABASE CONNECTED"))
    .catch((err) => console.log(err))
}

function createApp() {
    app = express();
    
    // INITIALIZE ENV VARIABLES
    dotenv.config();

    // INITIALIZING DATABASE
    dbInit();

    // INITIALIZING MIDDLEWARES
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended : false}));
    app.use(logger);

    // ADD ROUTERS HERE
    app.use('/api/v1/auth', require('./api/auth/routes'));
    app.use('/api/v1/product', require('./api/products/routes'));
    app.use('/api/v1/order', require('./api/orders/routes'));
    app.use('/api/v1/faq', require('./api/faq/routes'));

    app.use(validation);
    
    return app;
}

function runApp() {
    // DEFINING PORT AND HOST  
    const PORT = process.env.PORT || 4000
    const HOST = process.env.HOST || 'localhost'
    app = createApp();
    app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
    module.exports = app;
}

runApp();