import React from "react";
import axiosInstance from "../config/axios";

const CreateProjectModal = ({ isOpen, onClose, onCreate }) => {
  const [projectName, setProjectName] = React.useState("");

  if (!isOpen) return null;

  const handleCreate = (e) => {
    e.preventDefault();

    if (projectName.trim()) {


        axiosInstance.post('/projects/createproject',{projectName})
        .then((res)=>{
            console.log(res.data);
           
        })
        .catch((err)=>{
            console.log(err.response.data);
            seterror(err.response.data.msg)            
            
        })





      onCreate(projectName);
      setProjectName("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Create New Project</h2>
        <input
          type="text"
          placeholder="Enter project name"
          className="w-full border p-2 rounded mb-4"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-400 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={(e)=>handleCreate(e)}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
