var express = require('express');
var router = express.Router();

//xrisimopio to ObjectId apo to mongoDB
const ObjectID = require('mongodb').ObjectID;


router.get('/appointments', (req, res, next) => {
  req.collection.find({})   //mesa apo ta collection tis mongoDb kano fing gia na vro ta apointments
      .toArray() //ola afta pou tha vri ta vazo se ena array
      .then(results => res.json(results))  //to resposne pou tha paro to kano se json gia na mporo na to xrisimopiso apo to angular
      .catch(error => res.send(error)); //se periptosi pou iparxi kapio error to stelno sto browser mou
});

router.post('/appointments', (req, res, next) => {
  const { appointmentDate, name, email } = req.body;              //gia na dimiourgiso t oappoitment prepi na peraso kapia data sto body

  if (!appointmentDate || !name || !email) {  //ean kapio apo ta values mou ien adio
    return res.status(400).json({
      message: 'Appointment Date, Name and email are required',

    });
  }

  const payload = { appointmentDate, name, email }; //kateskevazo to object
  req.collection.insertOne(payload)   //kano insert sto collection
      .then(result => res.json(result.ops[0]))
      .catch(error => res.send(error));  //ean iparxi error to stleno sto browser
});


router.delete('/appointments/:id', (req, res, next) => {    //kano diagrafi to appointment me to id
  const { id } = req.params;  //perno to id
  const _id = ObjectID(id);  //to kano convert se mongoDb object id

  req.collection.deleteOne({ _id }) //kano delete apo to collection me ti function deleteOne
      .then(result => res.json(result))
      .catch(error => res.send(error)); //stelno to error sto browser
});


module.exports = router;
