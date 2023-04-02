const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

const uri = 'mongodb+srv://sinhdtph27866:5lITuoqDF51tCSNE@cluster0.8dci3g9.mongodb.net/lopcp17301?retryWrites=true&w=majority';

const NhanVienModel = require('./NhanVienModel');
app.get('/', async (req, res) => {
    await mongoose.connect(uri);
    console.log('Ket noi DB thanh cong');
    let arrNV = await NhanVienModel.find();
    console.log(arrNV);
    res.send(arrNV);

})
app.get('/add_nv', async (req, res) => {
    await mongoose.connect(uri);
    console.log('Ket noi DB thanh cong');
    let nvMoi = {
        ten: 'Nguyen Thao Trang',
        diachi: 'HN',
        luong: 12
    };

    let kq = await NhanVienModel.insertMany(nvMoi);
    console.log(kq);
    let arrNV = await NhanVienModel.find();
    res.send(arrNV);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});