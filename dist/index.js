"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_1 = __importDefault(require("http"));
//import { Server } from "socket.io";
const indexRouter = require('./src/routes/index');
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
//const io = new Server(server, { cors: {origin: "*"},});
const whitelist = ["http://localhost:5173"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
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
exports.default = app;
