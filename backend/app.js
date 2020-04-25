const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// App
const app = express();

// Routes
const accountRoutes = require('./routes/account');

// MongoDB password
const MONGODB_PWD = 'xwcO51T7iEqgCCgd';

mongoose
  .connect(
    `mongodb+srv://pratik:${MONGODB_PWD}@cluster0-sr87a.mongodb.net/node-angular`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Database is connected!');
  })
  .catch(() => console.log('Database connection failed!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Acces-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authentication'
  );
  res.setHeader(
    'Acces-Control-Allow-Methods',
    'GET, PUT, PATCH, POST, DELETE, OPTIONS'
  );
  next();
});

// All End-points

// Account
app.use('/api/auth/account', accountRoutes);

// User
app.use('/api/auth/users'); // add userRoutes once ready

// Customer
app.use('/api/data/customers'); // add customerRoutes once ready

// Order
app.use('/api/data/customers/:customerId/orders'); // add orderRoutes once ready

module.exports = app;
