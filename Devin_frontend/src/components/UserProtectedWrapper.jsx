import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
// import axios from 'axios';
import axiosInstance from '../config/axios';

const UserProtecedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
//   const usertype = localStorage.getItem('user-type');
  const navigate = useNavigate();
  const { user, setuser } = useContext(UserContext);
  useEffect(() => {
   

    const fetchUser = async () => {
        if (token  ) {
          try {
            const response = await axiosInstance.get('/user/profile', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const userdata = response.data;
            setuser(userdata); // Update the user state
            console.log('Fetched User:', userdata);
          } catch (error) {
            console.error('Error fetching user:', error);
            navigate('/login'); // Redirect to login on failure
          }
        } else {
          navigate('/login'); // Redirect if no token is present
        }
      };


      if (!user) {
        fetchUser()
        
      }

    },[token, user, setuser, navigate])
  
    if (!user) {
        return <div>Loading...</div>;
      }
  return (
    <div>{children}</div>
  )
}

export default UserProtecedWrapper