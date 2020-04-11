// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config()

// port
const PORT = process.env.PORT;

// routes
const routes = require('./routes');

// database
const db = require('./models');

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: "GET,POST,PUT,DELETE",
  optionsSuccessStatus: 200 //legacy browsers
}

// middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', routes.api);
app.use('/api/v1', routes.auth);

app.get('/', (req, res) => {
  res.send('api page');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));