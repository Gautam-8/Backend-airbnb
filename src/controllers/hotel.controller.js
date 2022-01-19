const express = require("express");

const router = express.Router();

const Hotel = require("../models/hotel.model");

router.get("" , async (req , res ) => {
  try{ 
    const hotels = await Hotel.find().lean().exec();
    return res.status(200).json(hotels);
  }catch(e){
    return res.status(500).json({message: e.message});
  }
      
   });

  
 module.exports = router;