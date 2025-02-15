import { Router } from "express";
import { createNewProject } from "./ProjectController.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/authMiddleware.js";





const projectRouter = Router();

projectRouter.post('/createproject',
    body('projectName') .isString() .withMessage('Project name is required'),
    authUser,
    createNewProject)


export default projectRouter