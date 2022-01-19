const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({

    id: {type:String , required:true},
    title: {type:String , required:true},
   image1:{type:String , required:true},
   image2:{type:String , required:true},
   image3:{type:String , required:true},
   image4:{type:String , required:true},
   image5:{type:String , required:true},
   bathroom_image:{type:String , required:true},
   bedroom_image:{type:String , required:true},
   host_name:{type:String , required:true},
   ratings:{type:Number , required:true},
   reviews:{type:String , required:true},
   location:{type:String , required:true},
   city:{type:String , required:true},
   state:{type:String , required:true},
   price:{type:Number , required:true},
   discounted_price:{type:Number , required:true},
   about:{type:String , required:true},
   guest_size:{type:Number , required:true},
   bedroom_size:{type:Number , required:true},
   bed_size:{type:Number , required:true},
   bathroom_size:{type:Number , required:true},
},
{
versionKey:false,
timestamps:true
});

module.exports = mongoose.model("hotel" , hotelSchema);