import React, { useState } from 'react'
import './Login.scss'
import loginImg from '../../assets/loginImg.svg'
import { PiHandWavingFill } from 'react-icons/pi'
import { BsFillEyeSlashFill, BsInfoCircle } from 'react-icons/bs'

const Login = () => {

	const [isTExt, setText] = useState('password')
	return (
		<div className='container'>
			<div className='login-auth'>
				<div className='login-auth__section1'>
					<img src={loginImg} alt='' />
					<strong>Fitnes</strong>
					<p className='aboutLogin'>qisqacha ta'rif</p>
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
						<button>Log In</button>
						<p className='btn__text'>
							Don't have an account?<span> Sign Up</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	)

  return (
    <div className='mainAuthLog'>
        <div className="mainImg__logo">
          <h1>bbb</h1>
           <h1>aaa</h1>
           <a href="">aa</a>
        </div>
    </div>
  )

}

export default Login
