import { Router } from "express";
import { createNewProject,addUserInProject, getAllProject } from "./ProjectController.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/authMiddleware.js";





const projectRouter = Router();

projectRouter.post('/createproject',
    body('projectName') .isString() .withMessage('Project name is required'),
    authUser,
    createNewProject)

projectRouter.post('/add-member',
        body('projectName') .isString() .withMessage('Project name is required'),
        body("users").isArray({ min: 1 }).withMessage("Users must be an array with at least one user"),authUser,addUserInProject)

projectRouter.get('/get-all',authUser,getAllProject)


export default projectRouter