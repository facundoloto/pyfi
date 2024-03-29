import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from "http";

const indexRouter = require('./src/routes/index');
const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const corsOptions = {
  origin: "https://pifyfrontend.netlify.app",
  // origin: "http://localhost:5173",
  credentials: true,
}

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', '.hbs');

app.use('/v1/', indexRouter);

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});

export default app;
