import express from "express";
import {
  cancelByBuyer,
  getPurchaseRequests,
  sendPurchaseRequest,
  updateStatusPurchaseRequest,
} from "../controllers/Request.Controller.js";
import { authMiddleware } from "../controllers/Auth.Controllers.js";
const router = express.Router();

router.route("/send").post(sendPurchaseRequest);
router.route("/:userId").get(getPurchaseRequests);
router.route("/buyer/:status/:id").put(authMiddleware, cancelByBuyer);
router.route("/:status/:id").put(authMiddleware, updateStatusPurchaseRequest);
router.route("/:id").get(updateStatusPurchaseRequest);

export default router;
