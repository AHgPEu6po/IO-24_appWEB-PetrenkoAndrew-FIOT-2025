import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/")
  }

  return (
    <div className='navbar'>
      <Link to='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Домашня</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Меню</a>
        <a href='#app-download' onClick={()=>setMenu("app")} className={menu==="app"?"active":""}>Мобільний додаток</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Контакти</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" />
        <div className="navbar-search-icon">
            <Link to='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/cart'><img src={assets.basket} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/myorders')}><img src={assets.orders_icon} alt="" /><p>Замовлення</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Вийти</p></li>
            </ul>
          </div>}
        
      </div>
    </div>
  )
}

export default Navbar
