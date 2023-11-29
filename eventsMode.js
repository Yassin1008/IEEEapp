import mongoose from "mongoose"

const EventSchema = mongoose.Schema(    
    {
        Title: {
            type: String,
            required: true
        },
        NumberOfAttendees: {
            type: Number,
            required: true
        },
        Date:{
            type: Date
        }

    }
)

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;