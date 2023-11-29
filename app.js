import express from "express";

const app = express();
const specificeventID = 420; 

const connect = async() =>{
  await mongoose.connect('mongodb+srv://yassinmohamed007:<Evs5i7Kk79plqot3>@cluster0.8myt66s.mongodb.net/?retryWrites=true&w=majority').then(() =>{
      console.log('Connected to database');
  });
}

app.get("/events/:eventID",(req,res) => {

    res.status(200).json({message: 'Welcome to our website!!'});
});

const PORT = 7000;

app.listen(PORT,() =>{
    console.log(`Connected to port ${PORT}`);
} )

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
        const { event } = req.body;
        const newEvent = new EventModel(event);
        await newEvent.save();
        res.status(200).json(newEvent)
    }
    catch(error){
        res.status(500).json({ message: '${error}' });
    }
})


