import exress from 'express';
const router = exress.Router();

import v1 from './v1.js';
router.use("/v1", v1);

export default router;