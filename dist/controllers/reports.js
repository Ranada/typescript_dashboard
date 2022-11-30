import { Report } from '../models/report';
const REPORTS = [];
let id = 0;
export const createReport = (req, res, next) => {
    const text = req.body.text;
    const importance = req.body.importance;
    const newReport = new Report(id.toString(), text, importance);
    id += 1;
    REPORTS.push(newReport);
    res.status(201).json({ message: 'Created new report.', createdReport: newReport });
};
//# sourceMappingURL=reports.js.map