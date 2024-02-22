import express from 'express';
const router = express.Router();

import useModule from './modules/use.module.js';
router.use("/todo", useModule);

export default router;