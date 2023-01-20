const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE=process.env.DATABASE
mongoose.connect(DATABASE, {
 useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('con Radhika')
})
 .catch((err) => {
  console.log(err, 'err')
 })