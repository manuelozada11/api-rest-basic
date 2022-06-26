const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const { connectMongo } = require('./src/utils/database');
require('dotenv').config({ path: path.join(__dirname, './.env') });

const app = express();

app.set('port', process.env.SERVER_PORT);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ 
    origin: process.env.NODE_ENV === 'production' 
    ? 'https://yourfrontend.com'
    : '*'
}));
connectMongo();

app.use('/api/v1/users', require('./src/routes/users.routes'));

app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')} 💥`));