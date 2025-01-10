import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Approutes from './routes/Approutes'
import { UserProvider } from './context/UserContext'

function App() {
  const [token, settoken] = useState(false)
  const [user, setUser] = useState(false)
     useEffect(() => {
       if (token) {
        // get user detail from api and  data fetch  from api  for home page
       }
     
       
     }, [])
      
     

    // if(!user){
    //   return (<>loading</>)
    // }

  return (
    <>
    <UserProvider>
      <Approutes/>
    </UserProvider>
    </>
  )
}

export default App
