import EventModel from "../models/eventsModel.js";

export const getEvents = async(req,res) =>{
    const events = await EventModel.find();
    res.status(200).json({ events });
}

export const addEvents = async(req,res) =>{
    try{
        const { event }  = req.body;
        const newEvent = new EventModel(event);
        await newEvent.save();
        res.status(200).json(newEvent)
    }
    catch(error){
        res.status(500).json({ message: `${error}` });
    }
}

export const deleteEvent = async (req,res) =>{
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
}

export const patchEvent = async (req,res) =>{
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
}

export const getSpecificEvent = async(req,res) => {
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
}