const express = require('express');

const connect = require('./config/db');

const cors = require('cors');

const app = express();

let port = process.env.PORT || 4444
 

app.use(express.json());
app.use(cors());


const hotelscontroller = require('./controllers/hotel.controller');
const tripscontroller = require('./controllers/trip.controller');


app.use("/hotel",hotelscontroller);
app.use('/trips' , tripscontroller);

 app.listen(port, async ()=>{
        await connect();
        console.log('listening on port 4444')
    })


