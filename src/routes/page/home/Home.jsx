import { AiOutlineSearch } from 'react-icons/ai'
import maxsulotlar from '../../../assets/maxsulotlar.jpg'
import ustozlar from '../../../assets/ustozlar.jpg'
import jihozlar from '../../../assets/Jihozlar.jpg'
import mijozlar from '../../../assets/mijozlar.jpg'
import "./Home.scss"

const Home = () => {

      function defaultREfresh(e) {
				e.preventDefault()
			}

  return (
		<div className='main__admis'>
			<div className='admin'>
				<div className='admin__tetx-serch'>
					<div className='text'>
						<h1 className='text__admin'>Dashboard</h1>
					</div>
					<div className='search__admin'>
						<form onSubmit={defaultREfresh} className='form__admin'>
							<AiOutlineSearch className='serch__admin-products' />
							<input type='text' placeholder='Izlash ' className='inp__admin' />
						</form>
					</div>
				</div>
				<div className='admin__products--items'>
					<div className='admin__items'>
						<div className='items'>
							<img src={maxsulotlar} alt='' />
							<div className='text_items'>
								<p>Beckend dan kelgan maxsulot</p>
								<strong>Beckend dan kelgan son</strong>
							</div>
						</div>
						<div className='items' style={{ marginTop: '0px' }}>
							<img
								style={{
									width: '171px',
									height: '170px',
									objectFit: 'contain',
								}}
								src={mijozlar}
								alt=''
							/>
							<div className='text_items'>
								<p>Beckend dan kelgan maxsulot</p>
								<strong>Beckend dan kelgan son</strong>
							</div>
						</div>
						<div className='items'>
							<img src={ustozlar} alt='' />
							<div className='text_items'>
								<p>Beckend dan kelgan maxsulot</p>
								<strong>Beckend dan kelgan son</strong>
							</div>
						</div>
						<div className='items'>
							<img src={jihozlar} alt='' />
							<div className='text_items'>
								<p>Beckend dan kelgan maxsulot</p>
								<strong>Beckend dan kelgan son</strong>
							</div>
						</div>
					</div>
				</div>
				<div className='admin__ustozlar'>
					<div className='admin__ustozlar--text'>
						<h3>Ustozlar</h3>
					</div>
				</div>
				<div className='admin__mijozlar'>
					<div className='admin__mijozlar--text'>
						<h3>Mijozlar</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home