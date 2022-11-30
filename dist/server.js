import express from 'express';
import { json } from 'body-parser';
import reportRoutes from './routes/reports';
const app = express();
app.use(json());
app.use('/reports', reportRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
//# sourceMappingURL=server.js.map