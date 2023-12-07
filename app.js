import express from "express";
import mongoose from "mongoose";
import EventRoute from "./route/EventRoute.js";
import TicketRoute from "./route/TicketsRoute.js";
import AttendeesRoute from "./route/AttendeesRoute.js";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

app.use('/events', EventRoute);
app.use ('/tickets', TicketRoute);
app.use ('/attendees', AttendeesRoute);

const connect = async() =>{
  await mongoose.connect(process.env.MONGO_URL).then(() =>{
      console.log('Connected to database');
  });
};

await connect();

const PORT = 7000;

app.listen(PORT,() =>{
    console.log(`Connected to port ${PORT}`);
} );

app.get('/home', (req, res) => {
  try {
    const responseData = { message: 'Request was successful.' };

    // Respond with a 200 OK status code and the data
    res.status(200).json(responseData);
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/events:id/attendees', (req,res) =>{
  const { id } = req.params;
  res.status(200).json({message: `The attendees for the event with this id = ${id}`});
});

