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
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.set('view engine', '.hbs');
app.use('/v1/', indexRouter);
server.listen(PORT, () => {
    console.log("SERVER IS RUNNING");
});
exports.default = app;
