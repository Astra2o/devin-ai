
import {validationResult} from 'express-validator'
import { allProject, createProject } from './projectServices.js';
import userModel from '../Users/userModel.js';

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



export const getAllProject = async (req,res) => {

    const errors =validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }

    try {

        const userId =req.user._id;
        const loggedInUser= await userModel.findOne({_id:userId})
       console.log(loggedInUser);
       
        const projects = await allProject(loggedInUser._id)

        return res.status(200).json(projects)

        

        
    } catch (error) {
        console.log(error);
        
    }
    
}


export const addUserInProject = async (req,res) => {

    const errors =validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }

    try {


        const {projectId,users} = req.body;
        const userId =req.user._id;



        
    } catch (error) {
        console.log(error);
        
    }
    
}