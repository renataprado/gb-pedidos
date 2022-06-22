require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const orderRoutes = require('./routes/orders.js');
const port = process.env.PORT || 5000;
const mongouri = process.env.MONGOURI

const app = express();

// app.use((req, res, next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
//   next();
// });

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/orders', orderRoutes);
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello from express!')
})

// mongoose.connect(mongouri, () => {
//   console.log('connect to DB!');
// })
mongoose
  .connect(mongouri)
  .then(() => {
   // console.log('connected to mongo')
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });

 module.exports = app;


