import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
//import { handleClientError, handleServerError, handle404Error} from './src/middleware/errorHandlers';

const indexRouter = require('./src/routes/index');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(handleClientError);
// app.use(handleServerError);
// app.use(handle404Error);
app.set('view engine', '.hbs');

app.use('/v1/', indexRouter);

app.listen(PORT, () => { console.log(`Example app listening at http://localhost:${PORT}`); });


module.exports = app;