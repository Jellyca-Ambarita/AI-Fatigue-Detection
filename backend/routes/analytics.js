const express = require('express')
const router = express.Router()
const detector = require('../mock_anomaly_detector')


// in-memory store (for demo)
const LOGS = []
const ALERTS = []


router.post('/ingest', (req, res) => {
const { crewId, typingSpeed, typos, delay, timestamp } = req.body
const score = detector.computeScore(crewId, { typingSpeed, typos, delay })
const entry = { crewId, typingSpeed, typos, delay, timestamp: timestamp || new Date().toISOString(), score }
LOGS.push(entry)


// generate alerts based on score
if(score>1.5){
const level = score>2.5 ? 'high' : 'medium'
const a = { ...entry, level }
ALERTS.push(a)
}


res.json({ ok:true, score })
})


router.get('/logs', (req,res)=> res.json(LOGS))
router.get('/alerts', (req,res)=> res.json(ALERTS))


module.exports = router