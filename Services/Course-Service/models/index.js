import { Schema, model } from "mongoose";

const videoSchema = new Schema({
  videoUrl: { type: String, required: true },
  publicId: { type: String, required: true },
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: Schema.Types.ObjectId, ref: "User" },
  videos: [videoSchema], // Array of video objects
  price: { type: Number, default: 0 },
  published: { type: Boolean, default: false },
});

const Course = model("Course", courseSchema);
export default Course;
