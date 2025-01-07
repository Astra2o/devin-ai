import React from 'react'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import Logout from '../Pages/Logout'

const Approutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/logout' element={<Logout/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Approutes