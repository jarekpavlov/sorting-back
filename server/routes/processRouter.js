import Router from 'express';
import {sendData, getData} from '../controllers/dataController.js';

const router = new Router()

router.post('/', () => sendData)
router.get('/', () => getData)

export default router;
