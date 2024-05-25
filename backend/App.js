
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const Routes = require('./routes/Todolist');


require('./database/connection');

const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(morgan('dev'));

// Middleware
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;

// Routes
app.use('/api/todoroute', todoroutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
