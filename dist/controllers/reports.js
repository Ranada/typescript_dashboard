"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReport = void 0;
const report_1 = require("../models/report");
// TODO: Eventually replace reports variable with database connection
const REPORTS = [];
let id = 0;
const createReport = (req, res, next) => {
    const text = req.body.text;
    const importance = req.body.importance;
    const newReport = new report_1.Report(id.toString(), text, importance);
    id += 1;
    REPORTS.push(newReport);
    res.status(201).json({ message: 'Created new report.', createdReport: newReport });
};
exports.createReport = createReport;
//# sourceMappingURL=reports.js.map