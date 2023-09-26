import Saidbar from "../../components/saidbar/Saidbar"
import "./jixozlar.scss"
import {BiSearch} from "react-icons/bi"
import { FiSettings, FiBell } from 'react-icons/fi'
import { Link } from "react-router-dom"

const Jihozlar = () => {

   function removeRefresh(e){
    e.preventDefault()
   }

  return (
		<div className='container'>
			<div className='main__jihozlar'>
				<div className='saidbbar'>
					<Saidbar />
				</div>
				<div className='main__jihozlar2'>
					<div className='jihozlar'>
						<div className='text__jih'>
							<div className='jihozlar__main-text'>
								<div className='jihozlar__tex'>
									<div className='textjihozlar'>
										<h2>Jihozlar</h2>
									</div>
									<div className='jihozlar__search'>
										<form onSubmit={removeRefresh} className='jihozlarForm'>
											<BiSearch className='search__form' />
											<input type='text' placeholder='Search here' />
										</form>
									</div>
								</div>
							</div>
							<div className='logoIcons'>
								<div className='jihozlar__logo'>
									<div className='icons__jihozlar'>
										<FiBell />
									</div>
									<div className='icons__jihozlar'>
										<FiSettings />
									</div>
									<div className='text__adminName'>
										<p>Ochilov . M</p>
										<p>Admin</p>
									</div>
								</div>
								<div className='btnAdd_jihozlar'>
									<Link style={{textDecoration:"none"}} to='/addJihozlar'>
										<button>+</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='main__card'>
						<div className='card'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Jihozlar