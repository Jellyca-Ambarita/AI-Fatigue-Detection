const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const analytics = require('./routes/analytics')


const app = express()
app.use(cors())
app.use(bodyParser.json())


app.use('/analytics', analytics)


const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('Server listening on', PORT))