const mongoose = require('mongoose');
mongoose.connect(global.config.Connection, {
 useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('con Radhika')
})
 .catch((err) => {
  console.log(err, 'err')
 })