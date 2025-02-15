import  { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import UserProtectedWrapper from "../components/UserProtectedWrapper";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CreateProjectModal from "../components/CreateProjectModel";

const Home = () => {
  const { user } = useContext(UserContext);
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleCreateProject = (projectName) => {
         
    //  console.log(axios);
     

    console.log("New Project ProjectCreated:", projectName);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UserProtectedWrapper>
      <div className="flex">
        {/* Sidebar with "Create Project" button */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} openModal={() => setModalOpen(true)} />
        
        <div className={`w-full transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-0"}`}>
          <Header toggleSidebar={toggleSidebar} />
          <main className="p-5">
            <h2 className="text-2xl">Welcome, {user?.user.fullname.firstname || "User"}!</h2>
            {/* "Create Project" button inside main content */}
            <button className="mt-4 bg-blue-500 w-full p-2 rounded" onClick={() => setModalOpen(true)}>
              Create Project
            </button>
          </main>
        </div>
      </div>

      {/* Create Project Modal */}
      <CreateProjectModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onCreate={handleCreateProject} />
    </UserProtectedWrapper>
  );
};

export default Home;
