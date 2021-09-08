const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes/processRouter');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/carpolicy', router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));


