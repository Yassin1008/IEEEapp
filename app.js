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
