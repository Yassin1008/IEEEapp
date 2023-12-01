import mongoose from "mongoose";

const TicketSchema = mongoose.Schema(
    {
        Price: {
            type:Number
        },
        eventID: {
            type:Number
        },
        userID: {
            type: Number
        }
    }
)

const TicketModel = mongoose.model('Ticket', TicketSchema);
export default TicketModel;