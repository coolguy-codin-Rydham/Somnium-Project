import bcrypt from "bcrypt";
import UserModel from "../models/index.js";
import jwt from "jsonwebtoken"

const UserSignup = async (req, res) => {
  try {
    let { name, email, password, role, username } = req.body;

    role = role || "learner";

    if (!name || !email || !password || !username) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const isExist = await UserModel.findOne({
      $or: [{ email }, { username }],
    });

    if (isExist) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      username,
      password: hashedPass,
      role: role,
    });

    res.status(201).json({
      message: "User created successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const UserSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isPassVal = await bcrypt.compare(password, user.password);

    if (!isPassVal) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    if (user.isBlocked) {
      return res.status(403).json({ message: "Your account has been blocked." });
    }

    const token = jwt.sign(
      { 
        userId: user._id,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export { UserSignup, UserSignIn };
