import Saidbar from '../../components/saidbar/Saidbar'
import Home from '../page/home/Home'


const Admin = () => {

 

  return (
		<div className='container'>
			<div className='main__admin'>
				<div className='saidbar__admin'>
					<Saidbar />
				</div>
				<>
					<Home />
				</>
			</div>
		</div>
	)
}

export default Admin