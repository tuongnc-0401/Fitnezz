import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    equipment: { type: String, required: true },
    releaseDate: { type: Date, default: Date.now },
    timeMinute : { type: Number, required: true },
    duration: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    gender: { type: Boolean, required: true },
    videos: [
        {videoUrl: { type: String, required: true }},
    ]
},
)

const Program = mongoose.model("Program", programSchema)

export default Program