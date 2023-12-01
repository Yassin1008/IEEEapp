import mongoose from "mongoose";
import EventModel from "./eventsModel.js";

const TicketSchema = mongoose.Schema(
    {
        Price: {
            type:Number
        },
        eventID: {
            type: Number
        },
        userID: {
            type: mongoose.attendeeID
        }
    }
)

const TicketModel = mongoose.model('Ticket', TicketSchema);
export default TicketModel;