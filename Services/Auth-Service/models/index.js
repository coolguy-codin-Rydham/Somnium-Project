import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["learner", "instructor", "admin"],
      default: "learner",
    },
    isBlocked: { type: Boolean, default: false },
    imageUrl: { type: String, required: true },
    imagePublicId: { type: String, required: true },
    orders: [{ type: mongoose.Schema.ObjectId, ref: "Orders" }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
