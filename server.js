// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// port
const PORT = process.env.PORT || 4000;

// routes
const routes = require('./routes');

// database
const db = require('./models');

// middleware
// app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', routes.api);

app.get('/', (req, res) => {
  res.send('api page');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));