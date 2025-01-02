import express from "express";
import controllers from "../controllers/controllers.js";

const router = express.Router();

router.post("/api/create", controllers.create_user);
router.get("/api/get", controllers.get_user);

export default router;
