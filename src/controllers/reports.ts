import { RequestHandler } from 'express';
import { Report } from '../models/report'

// TODO: Eventually replace reports variable with database connection
const REPORTS: Report[] = [];

let id: number = 0;
export const createReport: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string }).text;
    const importance = (req.body as { importance: string }).importance;
    const newReport = new Report(id.toString(), text, importance);
    id += 1;

    REPORTS.push(newReport);

    res.status(201).json({message: 'Created new report.', createdReport: newReport});
};