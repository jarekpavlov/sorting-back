const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const app = express()


app.use(cors())
app.use(express.json())
app.use('/', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()

