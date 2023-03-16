import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const emailRoute = require('./routes/emailRoute');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', '.hbs');

app.use('/v1/email', emailRoute);

app.listen(PORT, () => { console.log(`Example app listening at http://localhost:${PORT}`); });


module.exports = app;