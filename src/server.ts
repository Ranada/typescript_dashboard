// Import express and create app
import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import reportRoutes from './routes/reports';

const app = express();

// Middleware for parsing request body
app.use(json());
app.use('/reports', reportRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

// Set port and listen for incoming requests
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));