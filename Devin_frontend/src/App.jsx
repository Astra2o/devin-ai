import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Approutes from './routes/Approutes'

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
      <Approutes/>
    </>
  )
}

export default App
