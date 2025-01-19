import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserProtecedWrapper from '../components/UserProtectedWrapper'

const Home = () => {

    const {user}=useContext(UserContext)
  return (

    <UserProtecedWrapper>

      <div>{JSON.stringify(user)}</div>
    </UserProtecedWrapper>
  )
}

export default Home