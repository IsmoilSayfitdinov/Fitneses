import  { useState } from 'react'
import './Login.scss'
import loginImg from '../../assets/loginImg.svg'
import { PiHandWavingFill } from 'react-icons/pi'
import { BsFillEyeSlashFill, BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Login = () => {

	const [isTExt, setText] = useState('password')
	return (
		<div className='container'>
			<div className='login-auth'>
				<div className='login-auth__section1'>
					<img src={loginImg} alt='' />
					<strong>Fitnes</strong>
					<p className='aboutLogin'>qisqacha tarif</p>
					<div className='dumoloq'>
						<div className='dumaloq'></div>
						<div className='dumaloq1'></div>
						<div className='dumaloq1'></div>
					</div>
				</div>
				<div className='login-email__section2'>
					<PiHandWavingFill className='hand_authLogin' />
					<h1 className='welcome__text-LoginAuth'>Welcome back!</h1>
					<form className='login-email__form'>
						<p className='text__inp'>G-mail </p>
						<BsInfoCircle className='info__inp' />
						<input
							className='info__inputs'
							type='email'
							placeholder='Type your g-mail '
						/>
						<p className='text__inp'>Password</p>
						<input
							className='eyes__inputs'
							type={isTExt}
							placeholder='Type your pasword'
							required
						/>
						<p className='possword__forgot'>Forgot Pasword?</p>
						<BsFillEyeSlashFill
							onClick={() =>
								setText(isTExt === 'password' ? 'text' : 'password')
							}
							className='eyes__inp'
						/>
						<Link to="/loginemail">
							<button>Log In</button>
						</Link>
						<p className='btn__text'>
							Dont have an account?<span> Sign Up</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	)



}

export default Login
