import express from "express";
import { verify, verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import {
  addToOrder,
  createOrder,
  getAllOrders,
  getOrderStats,
  getSingleOrder,
  getUserOrders,
  monthlyOrderData,
  validate,
} from "../controllers/orderCont.js";

const route = express.Router();

route.post("/", verifyToken, addToOrder);
route.get("/find/:orderId", getSingleOrder);
route.post("/getall", verify, getUserOrders);
route.get("/currentmonthincome", verifyAdmin, monthlyOrderData);
route.get("/stats", verifyAdmin, getOrderStats);
route.post("/razorpay", createOrder);
route.post("/validate", validate);
route.get("/", verifyAdmin, getAllOrders);

export default route;
