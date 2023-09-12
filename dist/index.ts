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
const whitelist = ["http://localhost:5173"]
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', '.hbs');

app.use('/v1/', indexRouter);
// app.use(cors());

//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.use(function (_req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
//   // res.header("Access-Control-Allow-Credentials", "true");
//   // res.header(
//   //   "Access-Control-Allow-Headers",
//   //   "Origin, X-Requested-With, Content-Type, Accept"
//   // );
//   // res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE")
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
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

export default app;