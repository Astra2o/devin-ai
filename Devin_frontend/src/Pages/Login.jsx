import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,seterror]=useState(false)
  const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Logging in with:', { email, password });

    // Add your login logic here

    axios.post('/user/login',{email,password})
        .then((res)=>{
            console.log(res.data);
            if (res.status==201) {
                localStorage.setItem('token',res.data.token)
                navigate('/')
            }
            
        })
        .catch((err)=>{
            console.log(err.response.data);
            seterror(err.response.data.msg)            
            
        })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-2 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center">Login</h2>
        <h3 className='px-5 text-red-600'>{ error?<>{error}</>:<> </> }</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center">
          Dont have an account?{' '}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
