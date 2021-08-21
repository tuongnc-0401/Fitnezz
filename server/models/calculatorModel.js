import mongoose from 'mongoose'

const calculatorSchema = new mongoose.Schema({
    activity: { type: String },
    age: { type: String },
    caloGainLoss: { type: String },
    estimateDate: { type: String },
    estimateDay: { type: String },
    height: { type: String },
    numBMI: { type: String },
    numTDEE: { type: String },
    speed: { type: String },
    statusBMI: { type: String },
    target: { type: String },
    weight: { type: String },
    weightTarget: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

}, { timestamps: true }
);

const CalculatorInfo = mongoose.model('CalculatorInfo', calculatorSchema)
export default CalculatorInfo;