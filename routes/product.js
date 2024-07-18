import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  addproduct,
  getProducts,
  makeChange,
  removeProduct,
  singleProduct,
  search,
  getProductStats,
} from "../controllers/productCont.js";

const route = express.Router();

route.post("/", verifyAdmin, addproduct);
route.put("/:id", verifyAdmin, makeChange);
route.delete("/:id", verifyAdmin, removeProduct);
route.get("/find/:id", singleProduct);
route.get("/", getProducts);
route.get("/search", search);
route.get("/stats", verifyAdmin, getProductStats);

export default route;
