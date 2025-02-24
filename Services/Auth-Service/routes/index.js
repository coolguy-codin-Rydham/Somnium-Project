import express from "express";

import { UserSignIn, UserSignup } from "../middlewares/index.js";

const UserRouter = express.Router();

UserRouter.post("/signup", UserSignup);
UserRouter.post("/signin", UserSignIn)

export default UserRouter;
