import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from "./routes/login/Login"
import LoginEmail from "./routes/loginEmail/LoginEmail"
import Admin from './routes/admin/Admin'
import Ustoz from './routes/ustozlar/Ustoz'
import AddneUs from './routes/addnew/AddneUs'

function App() {

  return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/loginemail' element={<LoginEmail />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/ustozlar' element={<Ustoz />} />
				<Route path='/addNew' element={<AddneUs/>}/>
			</Routes>
		</div>
	)
}

export default App
