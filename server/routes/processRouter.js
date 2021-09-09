import {Router} from "express";
import DataController from "../controllers/dataController.js";

const router = new Router()


router.post('/', DataController.sendData);
router.get('/', DataController.getData);


export default router;