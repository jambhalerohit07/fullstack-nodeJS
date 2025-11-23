import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  createUser,
  forgotPassword,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/upload.js";

const router = Router();

router.post(
  "/create-user",
  upload.single("profileImage"),
  asyncHandler(createUser)
);
router.post("/login", asyncHandler(loginUser));
router.post("/forgot-password", asyncHandler(forgotPassword));
router.post("/logout", asyncHandler(logoutUser));

export default router;
