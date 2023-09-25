import "./loginemail.scss"
import loginImg from "../../assets/loginImg.svg"
import loginPhoneImg from "../../assets/loginPhoneImg.svg"
import { Link } from "react-router-dom"

const LoginEmail = () => {
  return (
		<div className='container'>
			<div className='login-email'>
				<div className='login-email__section1'>
					<img src={loginImg} alt='' />
					<strong>Fitnes</strong>
					<p>qisqacha tarif</p>
					<div className='dumoloqlar'>
						<div className='dumaloq'></div>
						<div className='dumaloq1'></div>
						<div className='dumaloq'></div>
					</div>
				</div>
				<div className='login-email__section2'>
					<h1>Second Step Verification</h1>
					<img src={loginPhoneImg} alt='' />
					<p>
						Enter the verification code we sent to
						<br />
						<a href='#'>matrix@gmail.com</a>
					</p>
					<form className='login-email__form'>
						<input type='text' placeholder='type code here' />
						<Link style={{cursor:"prointer"}} to="/admin">
							<button>Submit</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginEmail