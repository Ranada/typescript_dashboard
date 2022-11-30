import { Router } from 'express';
import { createReport } from '../controllers/reports';
const router = Router();
router.post('/', createReport);
router.get('/');
router.patch('/:id');
router.delete('/:id');
export default router;
//# sourceMappingURL=reports.js.map