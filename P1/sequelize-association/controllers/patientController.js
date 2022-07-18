const { Patient, Profile, MedicalRecord, Doctor } = require('../models')

class PatientController {

  static findAll(req, res) {
    //? What should we do ?
    Patient.findAll({
      include: [Profile] // eager loading
    })
    .then(patients => res.send(patients))
    .catch(err => res.send(err))
  }

  static findByPk(req, res) {
    //? What should we do ?
    Patient.findByPk(+req.params.id, {
      include: [Doctor]
    })
    .then(patient => res.send(patient))
    .catch(err => res.send(err))
  }

}

module.exports = PatientController