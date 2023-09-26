import './addJihozlar.scss'
import { FiSettings, FiBell } from 'react-icons/fi'
import Saidbar from '../../components/saidbar/Saidbar'

const Addjihozlar = () => {

    
  return (
		<div className='contaier'>
			<div className='main__addJihozlar'>
				<div className='saidbbar'>
					<Saidbar />
				</div>
				<div className='main-text__wraper'>
					<div className='addJihozlar__text'>
						<div className='Texts'>
							<h2>Yangi Jihoz qo’shish</h2>
						</div>
						<div className='logoTeaxt'>
							<div className='logoIconsText'>
								<div className='logo'>
									<FiBell />
								</div>
								<div className='logo'>
									<FiSettings />
								</div>
								<div className='AdminName'>
									<p>Nabila A.</p>
									<p>Admin</p>
								</div>
							</div>
						</div>
					</div>
					<div className='AddminInp'>
						<div className='inpTitleAdmin'>
							<h2>Mahsulot ma’lumotlari</h2>
						</div>
						<form>
							<div className='inpAdmin'>
								<div className='main__inp'>
									<div className='inp__1--admin'>
										<div className='inp1'>
											<p>Nomi *</p>
											<input type='text' placeholder='Maria' />
										</div>
										<div className='inp2'>
											<p>Narxi *</p>
											<input type='text' placeholder='Historia' />
										</div>
									</div>
									<div className='inp__1--admin'>
										<div className='inp1'>
											<p> Brand *</p>
											<input type='text' />
										</div>
										<div className='inp2'>
											<p>soni *</p>
											<input type='number' />
										</div>
									</div>
									<div className='inp__1--admin'>
										<div className='inp1'>
											<p>Ma’lumot *</p>
											<textarea
												style={{ width: '617px', height: '175px' }}
												className='teaxtarea'
											></textarea>
										</div>
										<div className='inp2'>
											<p>rasmi *</p>
											<div className='lable'>
												<input type='file' id='file' />
												<label htmlFor='file'>Upload img</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='btn__sumbit'>
								<button className='add'>saqalsh</button>
								<button style={{ background: '#4D44B5' , color:"#fff" }} className='save'>
									qo’shish
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Addjihozlar