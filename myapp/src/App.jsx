import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import  Signup2  from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Welcome from './components/Welcome'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      
      {/* <Signup /> */}
      <Navbar />
      {/* <StateBasic/> */}
      <Routes>
        <Route path="/Signup" element={<Signup2 />} />
        <Route path="/l" element={<Login />} />
        <Route path='/state' element={<StateBasic />} />
        <Route path='/wc' element={<Welcome />} />
        <Route path='Api' element={<Api/>} />
      </Routes>
      
      
    </>
  )
}

export default App
