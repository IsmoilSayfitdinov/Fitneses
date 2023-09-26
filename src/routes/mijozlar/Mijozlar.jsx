import Saidbar from '../../components/saidbar/Saidbar'
import "./mijozlar.scss"
import { AiOutlineBell,AiFillSetting,AiOutlineUser,AiOutlineSearch,AiOutlinePlus } from "react-icons/ai"

const Mijozlar = () => {
  return (
    <div className='mijozlar'>
        <Saidbar/>
        <div className="Mijozlar_second-item">
          <div className="mijozlarTitels">
            <h1>Mijozlar</h1>
            <div className="round-balls">
              <div className="round"><AiOutlineBell/></div>
              <div className="round"><AiFillSetting/></div>
              <div className="round-title"><p>Matrix</p><span>Admin</span></div>
              <div className="round"><AiOutlineUser/></div>
            </div>
          </div>
          <div className="teacher__search-input">
              <div className="input">
                <AiOutlineSearch/>
                <input type="text" placeholder="izlash"/>
              </div>
              <button><AiOutlinePlus/></button>
          </div>
        </div>
    </div>
  )
}

export default Mijozlar