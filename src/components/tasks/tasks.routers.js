import { Router } from "express";
import {deleteTaskById, getTaskByUser, updateTaskById} from "./tasks.controller.js";


const router = Router();


router.route('/getTask/user/:id')
  .get(getTaskByUser);

router.route('/tasks/delete/:id')
  .delete(deleteTaskById);

router.route('/task/update/:id')
  .put(updateTaskById);

  export default router;