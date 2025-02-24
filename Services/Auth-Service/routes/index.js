import express from "express";
import { UserSignIn, UserSignup, UserProfile } from "../middlewares/index.js";
import { upload } from "../utils/multer.js";

const UserRouter = express.Router();

UserRouter.post("/signup",upload.single("image"),  UserSignup);
UserRouter.post("/signin", UserSignIn)
UserRouter.get("/", UserProfile );

export default UserRouter;
