//* Packages
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//* routing
const loginSignupRoute = require('./routes/loginAndSignup');
const mainRoute = require('./routes/main');


//* Configuration
const app = express();
require('dotenv').config({ path: './config/config.env' });

//* Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//* requirements
const mongoServer = require('./config/db');


//* Middlewares
app.use(bodyParser.json());
app.use('/', mainRoute)
app.use('/api/v1', loginSignupRoute);



//* port configuration
PORT = process.env.PORT



app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));