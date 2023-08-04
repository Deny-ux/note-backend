"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mockData_1 = require("./repositories/mockData");
require("express-async-errors");
// import custom middleware
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
// routes
const notesRoute_1 = __importDefault(require("./routes/notesRoute"));
const port = 3000;
const app = (0, express_1.default)();
// notes array accessible everywhere in the app
app.locals.notes = [...mockData_1.notes];
// middleware
app.use(express_1.default.json());
// routes
app.use("/notes/", notesRoute_1.default);
app.use(notFound_1.default);
app.use(errorHandler_1.default);
// start server
try {
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}
catch (error) {
    console.log(error);
}
