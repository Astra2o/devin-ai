import projectModel from "./ProjectModel.js";

export const createProject = async ({ projectName, userId }) => {
  if (!projectName) {
    throw new Error("Project name is required");
  }

  if (!userId) {
    throw new Error("User is required");
  }

  try {
    const project = await projectModel.create({ projectName, users: [userId] });
    return project;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Project with this name already exists for the user");
    }
    throw error; // Re-throw other errors
  }
};



export const allProject = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    console.log("Searching projects for user:", userId);

    const projects = await projectModel.find({ users: userId });

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects"); // Avoid exposing internal errors
  }
};

