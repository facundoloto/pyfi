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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', '.hbs');
app.use('/v1/', indexRouter);
// app.use(HTTPClientError.Http404Error);
// app.use(HTTPClientError.Http500Error);
// setInterval(()=>{
//   io.on('connection', async (socket:any) => {
//     const allPost = await findAll()
//       socket.emit('json',allPost);
//     });
// }, 30000)

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});

module.exports = app;