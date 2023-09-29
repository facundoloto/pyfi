import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from "http";
//import { Server } from "socket.io";

const indexRouter = require('./src/routes/index');
const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
//const io = new Server(server, { cors: {origin: "*"},});
const corsOptions = {
  origin: "https://instagrampyfi.netlify.app",
  credentials: true,
}

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', '.hbs');

app.use('/v1/', indexRouter);

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});

export default app;