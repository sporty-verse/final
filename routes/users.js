import express from "express";
import { verify, verifyAdmin } from "../utils/verifyToken.js";
import { getUserStats, singleUser, users } from "../controllers/usersCont.js";

const route = express.Router();
route.get("/stats", verifyAdmin, getUserStats);
route.get("/", verifyAdmin, users);
route.get("/find/:userId", verify, singleUser);

export default route;
