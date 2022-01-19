 const mongoose = require('mongoose');

 module.exports = ()=>{
     return mongoose.connect('mongodb+srv://airbnb:airbnb@cluster0.jjcne.mongodb.net/airbnb')
 }