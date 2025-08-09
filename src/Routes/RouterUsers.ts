import { Router } from "express";
import {CreateUser} from '../Controller/ControllerUsers'

const router = Router();

router.post('/CreateUser', CreateUser);

export default router; 