import express from "express";
import { upload } from "../utils/multer.js";
import Course from "../models/index.js";
const CourseRouter = express.Router();

// CourseRouter.get("/", (req, res) => {});

// CourseRouter.get("/:id", (req, res) => {});

// CourseRouter.post("/:id/:userId", (req, res) => {});

CourseRouter.post("/create-course", async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newCourse = new Course({
      title,
      description,
      price,
      category,
      videos: [],
    });

    await newCourse.save();

    res.status(201).json({
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (err) {
    console.error("Error creating course:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
// ✅ Upload Multiple Videos to a Specific Course
CourseRouter.post(
  "/upload-videos/:id",
  ()=>{
    console.log("Multer hit");
    upload.array("videos");
    console.log("Multer hit Complete");
  },
  async (req, res) => {
    try {
    console.log("Mai yaha aaya tha 100");

      const { title, description } = req.body;
      const { id } = req.params;

      // ✅ Validate course ID
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: "Invalid course ID" });
      }



      // ✅ Validate uploaded files
      if (!Array.isArray(req.files) || req.files.length === 0) {
        return res.status(400).json({ error: "No videos uploaded" });
      }

      // ✅ Map uploaded video data
      const uploadedVideos = req.files.map((file) => ({
        videoUrl: file.path || "",
        publicId: file.filename || "",
      }));

    console.log("Mai yaha aaya tha 10");

      // ✅ Find the course by ID
      const course = await Course.findById(id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      // ✅ Append new videos instead of overwriting
      course.videos.push(...uploadedVideos);

      // Optionally update title and description if provided
      if (title) course.title = title;
      if (description) course.description = description;

      // ✅ Save updated course
      await course.save();

    console.log("Mai yaha aaya tha 1");


      res.status(200).json({
        message: "Videos uploaded successfully",
        course,
      });
    } catch (err) {
    console.log("Mai yaha aaya tha 100s");
      console.error("Error uploading videos:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default CourseRouter;
