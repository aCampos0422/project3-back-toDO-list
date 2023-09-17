import { Router } from "express";
import { createCategorie } from "./categories.controller.js";

const router = Router();

router.route('/categories')
  .post(createCategorie);


export default router;