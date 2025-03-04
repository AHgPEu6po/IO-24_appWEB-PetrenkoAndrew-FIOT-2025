import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder="Ім'я" required />}
          <input type="email" placeholder='Пошта' required />
          <input type="password" placeholder='Пароль' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Я ознайомлений та погоджуюся з Політикою Кофіденсійності</p>
        </div>
        {currState==="Login"
        ?<span onClick={()=>setCurrState("Sign Up")}>Створити акаунт</span>
        :<span onClick={()=>setCurrState("Login")}>Увійти</span>
        }
      </form>
    </div>
  )
}

export default LoginPopup
