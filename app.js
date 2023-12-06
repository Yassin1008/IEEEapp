import express from "express";
import mongoose from "mongoose";
import EventModel from "./eventsModel.js";
import TicketModel from "./ticketModel.js";
import AttendeeModel from "./attendeeModel.js";

const app = express();
app.use(express.json());

const connect = async() =>{
  await mongoose.connect('mongodb+srv://yassinmohamed007:vnLhDb90XLewqBDT@cluster0.8myt66s.mongodb.net/?retryWrites=true&w=majority').then(() =>{
      console.log('Connected to database');
  });
};

await connect();

app.get('/events/:id',async(req,res) => {
  try{
    const { id } = req.params;
    const event = await EventModel.findById(id);
    console.log('event = ' , event);
    if(event){
      res.status(200).json(event);
    }else{
      res.status(404).json({message: 'No event found with this id'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

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

app.post('/events', async(req,res) =>{
    try{
        const { event }  = req.body;
        const newEvent = new EventModel(event);
        await newEvent.save();
        res.status(200).json(newEvent)
    }
    catch(error){
        res.status(500).json({ message: `${error}` });
    }
});

app.delete('/event/:id', async (req,res) =>{
  try{
  const { id } = req.params;
  const deletedEvent = await EventModel.findByIdAndDelete(id);
  if(deletedEvent){
    res.status(200).json ({message: 'Deleted Successfully'});
  }else{
    res.status(404).json ({message: 'no event with this id'});
  }
  }catch(err){
    res.status(500).json({message: 'Server error'});
  }
});

app.patch('/event/:id', async (req,res) =>{
  try{
    const { id } = req.params;
    const { numberOfAttendees } = req.body;
    const event = await EventModel.findById(id);
    if(event){
      event.NumberOfAttendees = numberOfAttendees;
      await event.save();
      res.status(200).json({ event });
    }else{
      res.status(404).json({message: 'no event with this id'});
    }
  }catch(err){
    res.status(500).json({message:'server error'});
  }
});

app.get('/events', async(req,res) =>{
  const events = await EventModel.find();
  res.status(200).json({ events });
});

app.get('/events:id/attendees', (req,res) =>{
  const { id } = req.params;
  res.status(200).json({message: `The attendees for the event with this id = ${id}`});
});

app.get('/tickets', async (req,res)=>{
  const tickets = await TicketModel.find();
  res.status(200).json({ tickets });
});

app.patch('/tickets/:id', async(req,res) => {
  try{
    const { id } = req.params;
    const { userID } = req.body;
    const ticket = await TicketModel.findById(id);
    if(ticket){
      ticket.userID = userID
      ticket.save();
      res.status(200).json({ticket});
    }else{
      res.status(404).json({message: 'No event with this id'});
    }
  }catch(err){
    res.status(500).json({message: 'Server error'});
  }
});


app.delete('/attendee/:id', async (req,res) => {
  try {
      const { id } = req.params;
      const deletedAttendee = await AttendeeModel.findByIdAndDelete(id);
      if(deletedAttendee){
        res.status(200).json({message: 'Deleted sucessfuly'});
      } else{
        res.status(404).json({message: 'No attendee with this ID'});
      }
  } catch (err) {
    res.status(500).json({message: 'Server Error'});
  }
})

app.get('/attendee/:id' , async(res,req) =>{
  try{  
  const { id } = req.params;
  const attendee = AttendeeModel.findById(id);
  console.log('attendee =', attendee);
  if(attendee){
    res.status(200).json({attendee});
  }else{
    res.status(404).json({message: 'no attendee with this id'});
  }
  }catch(err){
    res.status(500).json({message: 'Server error'});
  }
});

app.get('/attendees', async (req,res) =>{
    const attendees = await AttendeeModel.find();
    res.status(200).json({ attendees });
});
