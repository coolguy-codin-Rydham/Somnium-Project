import bcrypt from "bcrypt";
import UserModel from "../models/index.js";
import jwt from "jsonwebtoken"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const UserSignup = async (req, res) => {
  try {
    let { name, email, password, role, username } = req.body;
    let imageUrl = null;
    let publicId = null;

    if(req.file){
      const result = await uploadOnCloudinary(req.file.buffer, req.file.originalname);
      if(!result){
        return res.status(400).json("Failed to upload image");
      }
      imageUrl = result.secure_url;
      publicId = result.public_id;
    }

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
      imageUrl: imageUrl,
      imagePublicId: publicId,
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
    console.log("I am here");
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
      sameSite: 'lax',
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


const UserProfile = async(req, res) => {
  try {
    let token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided. Please login." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findById(decoded.userId)
      .select('-password'); // Exclude password from response

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.isBlocked) {
      return res.status(403).json({ message: "Your account has been blocked." });
    }

    user.orders.populate();

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage, 
        orderHistory : user.orders,
      }
    });
  }
  catch(e){
    console.log("Profile Error:", e);

  }
}

export { UserSignup, UserSignIn, UserProfile };
