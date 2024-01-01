import express from "express";
import {getFeedposts, getUserPosts, likePost} from  "../controllers/posts.js";
import  verify  from "jsonwebtoken";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();



//read

router.get("/", verifyToken, getFeedposts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//update
router.patch("/:id/like", verifyToken, likePost);

export default router;
