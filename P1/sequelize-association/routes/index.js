const express = require('express')
const router = express.Router()
const patientRoutes = require('./patientRoutes')
const doctorRoutes = require('./doctorRoutes')

router.use('/patients', patientRoutes)
router.use('/doctors', doctorRoutes)

module.exports = router