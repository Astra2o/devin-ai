
import {validationResult} from 'express-validator'
import { createProject } from './projectServices.js';

export const createNewProject =async (req,res) => {
    const errors =validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }


   try {
     const {projectName} =req.body;
     const userId =req.user._id;
 
     const newProject = await createProject({projectName,userId});
     return res.status(201).json(newProject);

   } catch (error) {
    console.log(error);
    
    return res.status(400).json(error.message)

   }

    
    
}