import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from "./routes/login/Login"
import LoginEmail from "./routes/loginEmail/LoginEmail"

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/loginemail' element={<LoginEmail/>}/>
      </Routes>
    </div>
  )
}

export default App
