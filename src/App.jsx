import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from "./routes/login/Login"
import LoginEmail from "./routes/loginEmail/LoginEmail"
import Admin from './routes/admin/Admin'
import Teachers from './routes/teachers/Teachers'
import Mijozlar from './routes/mijozlar/Mijozlar'
import Jihozlar from './routes/jihozlar/Jihozlar'
import Addjihozlar from './routes/addJihozlar/Addjihozlar'

function App() {

  return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/loginemail' element={<LoginEmail />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/teachers' element={<Teachers />} />
				<Route path='/mijozlar' element={<Mijozlar />} />
				<Route path='/addJihozlar' element={<Addjihozlar />} />
				<Route path='/jihozlar' element={<Jihozlar />} />
			</Routes>
		</div>
	)
}

export default App
