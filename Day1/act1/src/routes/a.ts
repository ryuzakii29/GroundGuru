import { Router } from "express";
import { AController } from "../controller/AController";
const router = Router();
const _cc = new AController();

router.get('/', _cc.geta());
router.post('/', _cc.updatea());
router.patch('/',  _cc.patcha());


export const aa = router;