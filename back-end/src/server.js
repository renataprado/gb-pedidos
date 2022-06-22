require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const orderRoutes = require('./routes/orders.js');
const port = process.env.PORT || 5000;
const mongouri = process.env.MONGOURI


mongoose.connect(mongouri,  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, () =>{
  console.log('connect to mongoDB!');
})
const app = express();

// app.use((req, res, next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
//   next();
// });

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', async (req, res, next) => {
  res.status(200).send('Hello from express!')
})

app.use('/orders', orderRoutes);

module.exports = app;


