"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import express and create app
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const reports_1 = __importDefault(require("./routes/reports"));
const app = (0, express_1.default)();
// Middleware for parsing request body
app.use((0, body_parser_1.json)());
app.use('/reports', reports_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// Set port and listen for incoming requests
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
//# sourceMappingURL=server.js.map