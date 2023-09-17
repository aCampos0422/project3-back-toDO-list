import { Router } from "express";
import { createUsers, createTaskByUser } from "./users.controller.js";

/*--------------------------------------- */


const router = Router();

router.route('/users')
  .post(createUsers)

router.route('/taskByUser')
  .post(createTaskByUser)

export default router;