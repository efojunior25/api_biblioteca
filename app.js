require('dotenv').config();

const express = require('express');
const cors = require('cors');

const bibliotecaRouter = require('./routes/bibliotecaRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/health', (_, res) => res.json({'health':'server running'}));

app.use('/api', bibliotecaRouter);

app.listen(process.env.PORT, () => console.log(`server running in port ${process.env.PORT}`));