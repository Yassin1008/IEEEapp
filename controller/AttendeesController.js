import AttendeeModel from "../models/attendeeModel.js";

export const getAttendees = async (req,res) =>{
    const attendees = await AttendeeModel.find();
    res.status(200).json({ attendees });
}

export const getspecificAttendee = async(res,req) =>{
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
}

export const deleteAttendee = async (req,res) => {
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
}