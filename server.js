const express = require('express')
const app = express()
const port = 3000

const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
const { deleteOne } = require('./labModel');
const uri = 'mongodb+srv://sinhdtph27866:5lITuoqDF51tCSNE@cluster0.8dci3g9.mongodb.net/bailab?retryWrites=true&w=majority';
const LabModel = require('./labModel');


app.get('/', async(req, res) => {
    await mongoose.connect(uri).then(console.log('Kết nối DB thành công!'));
  
    try{
        const labs = await LabModel.find();
      //   LabModel.updateMany();
        // LabModel.updateOne({ten:'sinh'},{ten:'Manh'});
  
      //   LabModel.deleteMany({ten:'lab4'})
         LabModel.deleteOne({ten:'sinh'});
  
          res.send(labs);
    }catch(err){
      console.log(err)
    }
  });

  app.get('/add_data', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong!'));
    let lab = new LabModel ({
      ten : 'Dương',
      tuoi:21,
      diachi:'Ha Noi',
    });
    let lab1   =  new LabModel(
        {
            ten : 'Sinh',
            tuoi:20,
            diachi:'Thai Binh',
        });
    try {
      let kq = await lab.save();  
      let kq1 = await lab1.save();  
      console.log(kq);
      let labs = await LabModel.find();
      res.send(labs);
    } catch (err) {
      console.log(err);
    }
  });
  app.get('/update_data', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong!'));
    try {
      
    let kq = await LabModel.updateOne({ten:'Sinh'},{ten:'Quân'});
      let labs = await LabModel.find();
      
      res.send(labs);
    } catch (err) {
      console.log(err);
    }
  });


  app.get('/delete_data', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong!'));
    try {
      
    let kq = await LabModel.deleteMany({ten:'Dương'});
    let kq1 = await LabModel.deleteOne({ten:'Sinh'});
      let labs = await LabModel.find();
      
      res.send(labs);
    } catch (err) {
      console.log(err);
    }
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});