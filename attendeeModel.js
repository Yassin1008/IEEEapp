import mongoose from "mongoose";

const AttendeeSchema = mongoose.Schema(
    {
        Name:{
            type: String
        },
        Age: {
            type: Number
        },
        Email:{
            type: String,
            unique: true

        }
    }
)

const AttendeeModel = mongoose.model('Attendee', AttendeeSchema);

export default AttendeeModel;