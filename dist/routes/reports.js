"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reports_1 = require("../controllers/reports");
const router = (0, express_1.Router)();
router.post('/', reports_1.createReport);
router.get('/');
router.patch('/:id');
router.delete('/:id');
exports.default = router;
//# sourceMappingURL=reports.js.map