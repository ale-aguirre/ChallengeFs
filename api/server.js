const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/index'));
app.use(require('./routes/productos'));
// app.use(require('./routes/product'));


app.listen(process.env.PORT, function() {
    console.log('Server is running on Port:', process.env.PORT);
});