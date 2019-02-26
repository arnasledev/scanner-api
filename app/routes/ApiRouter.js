import express from 'express'
import ProcessController from '../controllers/ProcessController'

const router = express.Router()
const process = new ProcessController

router.post('/scan', (req, res) => process.scan(req, res))

module.exports = router