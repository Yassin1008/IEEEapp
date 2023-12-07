import TicketModel from "../models/ticketModel.js";

export const getTickets = async (req,res)=>{
    const tickets = await TicketModel.find();
    res.status(200).json({ tickets });
}

export const patchTicket = async(req,res) => {
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
}