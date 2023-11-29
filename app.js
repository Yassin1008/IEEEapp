import express from "express";

const app = express();

const specificeventID = 420; 

app.get("/events/:eventID",(req,res) => {

    res.status(200).json({message: 'Welcome to our website!!'});
});

const PORT = 7000;

app.listen(PORT,() =>{
    console.log(`Connected to port ${PORT}`);
} )

app.get('/', (req, res) => {
  try {
    const responseData = { message: 'Request was successful.' };

    // Respond with a 200 OK status code and the data
    res.status(200).json(responseData);
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
