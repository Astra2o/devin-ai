import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    lowercase: true,
    required: [true, "Project name is required"],
    trim: true,
    unique: true, // Ensures a unique index in the database
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

// Add a compound unique index for projectName and users
projectSchema.index({ projectName: 1, users: 1 }, { unique: true });

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;
