const mongoose = require('mongoose');
const NhanVienSchema = new mongoose.Schema({
    ten:{
        type:String,
        require:true
    },
    tuoi:{
        type:Number
    },
    luong:{
        type:Number,
        default:0
    }
})
const NhanVienModel = new mongoose.model('nhanvien',NhanVienSchema);
module.exports = NhanVienModel;