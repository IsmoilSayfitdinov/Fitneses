import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from "./routes/login/Login"
import LoginEmail from "./routes/loginEmail/LoginEmail"
import Admin from './routes/admin/Admin'

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/loginemail' element={<LoginEmail/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default App
