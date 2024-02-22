import exress from 'express';
const router = exress.Router();

import { useController } from '../../controllers/use.controller.js';
router.get("/",useController.findMany)
router.post("/",useController.create)
router.put("/:id",useController.update)
router.delete("/:id",useController.delete)


export default router;