// Import express and create app
import express, { Request, Response, NextFunction } from 'express';
import reportRoutes from './routes/reports';

const app = express();

// Process environment variables
// require('../node_modules/dotenv').config();

// Instantiate database
// const sqlite3 = require('sqlite3');
// const db = new sqlite3.Database(
//     process.env.data_source,
//     sqlite3.OPEN_READWRITE
// );

// Middleware for parsing request body
app.use(express.json());
app.use('/reports', reportRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

// Routes
// app.get('/', (req: Request, res: Response, next: any): any => {
//     console.log("Hello from home path!");
//     console.log("RESPONSE:", typeof res, res);
//     res.status(200);
//     res.json("Welcome to the home path!");

//     // const sql = 'SELECT * FROM reports';
//     // const params: string[] = [];

//     // db.all(sql, params, (err: Promise<object>, rows: string) => {
//     //     if (err) {
//     //         next(err);
//     //     } else {
//     //         console.log("In the home path!")
//     //         res.status(200);
//     //         res.json(rows);
//     //     }
//     // });

// })

// Set port and listen for incoming requests
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));