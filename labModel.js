const mongoose = require('mongoose');

const LabSchema = new mongoose.Schema({
    ten:{
        type:String,
        require:true
    },
    tuoi:{
        type:Number,
        default:0
    },
    diachi:{
        type:String,
    },
});
const LabModel = mongoose.model('bt',LabSchema);
module.exports = LabModel;