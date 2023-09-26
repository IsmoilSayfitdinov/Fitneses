import { FiHome } from 'react-icons/fi'
import './Saidbar.scss'
import saidlogo from '../../assets/saidbarLogo.png'
import { LiaUserTieSolid } from 'react-icons/lia'
import { RiUserLine, RiCalendarLine } from 'react-icons/ri'
import { FaShopify  } from 'react-icons/fa'
import {FaMessage} from "react-icons/fa6"
import {TfiStatsUp} from "react-icons/tfi"
import { Link } from 'react-router-dom'


const Saidbar = () => {

	return (
		<div className='saidbaer'>
			<div className='main__saidbar'>
				<div className='blokc__saidbar-img'>
					<img style={{ marginLeft: '26px' }} src={saidlogo} alt='' />
				</div>
				<div className='select__page'>
					<div className='page'>
						<Link to='/admin'>
							<p className='home__text'>
								<FiHome style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Home</p>
							</p>
						</Link>
					</div>
					<div className='page'>
						<Link to='/ustozlar'>
							<p className='home__text'>
								<LiaUserTieSolid style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Ustozlar</p>
							</p>
						</Link>
					</div>
					<div className='page'>
						<Link to='/mijozlar'>
							<p className='home__text'>
								<RiUserLine style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Mijozlar</p>
							</p>
						</Link>
					</div>
					<div className='page'>
						<Link to='/jihozlar'>
							<p className='home__text'>
								<RiCalendarLine style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Jihozlar</p>
							</p>
						</Link>
					</div>
					<div className='page'>
						<Link to='/maxsulotlar'>
							<p className='home__text'>
								<FaShopify style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Maxsulotlar</p>
							</p>
						</Link>
					</div>
					<div className='page'>
						<Link to='/sovol'>
							<p className='home__text'>
								<FaMessage style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Savol javob</p>
							</p>
						</Link>
					</div>
					<div className='page'>
						<Link to='/static'>
							{' '}
							<p className='home__text'>
								<TfiStatsUp style={{ width: '40px', height: '40px' }} />{' '}
								<p style={{ paddingLeft: '24px' }}>Statistika</p>
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Saidbar
