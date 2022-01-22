const express = require("express");

const router = express.Router();

const Trip = require("../models/trip.model");

router.get("/:name" , async (req , res ) => {
  try{ 
    const trips = await Trip.find({name : req.params.name}).lean().exec();
    return res.status(200).json(trips);
  }catch(e){
    return res.status(500).json({message: e.message});
  }
      
   });

   router.get("" , async (req , res ) => {
    try{ 
      const trips = await Trip.find().lean().exec();
      return res.status(200).json(trips);
    }catch(e){
      return res.status(500).json({message: e.message});
    }
        
     });

     router.post("", async (req, res) => {
        try {
          const trips = await Trip.create(req.body);
           return res.status(201).send(trips);
        } catch (e) {
          return res.status(500).json({ message: e.message, status: "Failed" });
        }
      });
  

 module.exports = router;