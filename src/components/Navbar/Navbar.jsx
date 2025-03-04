import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

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
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
