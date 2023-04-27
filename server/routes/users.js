import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
 } from "../controller/users.js";
 import { verifyToken } from "../middelware/auth.js";

 const router = express.Router();

 /* read  */
 router.get("/:id", verifyToken, getUser);
 router.get("/:id/friends", verifyToken, getUserFriends);

 /* update */
 router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

 export default router;
