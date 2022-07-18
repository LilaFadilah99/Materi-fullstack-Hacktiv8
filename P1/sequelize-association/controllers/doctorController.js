const { Doctor, MedicalRecord, Patient } = require('../models')

class PatientController {

  static findAll(req, res) {
    //? What should we do ?
    Doctor.findAll({
      include: [MedicalRecord]
    })
    .then(doctors => res.send(doctors))
    .catch(err => res.send(err))
  }

  static findByPk(req, res) {
    //? What should we do ?
    // console.log(req.params, 'req.params');
    Doctor.findByPk(+req.params.id, {
      // include: [{
      //   model: MedicalRecord,
      //   include: [Patient]
      // }]
      include: [Patient]
    })
    .then(doctors => res.send(doctors))
    .catch(err => res.send(err))
  }

}

module.exports = PatientController