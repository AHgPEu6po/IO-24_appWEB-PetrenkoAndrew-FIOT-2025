import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/' element={<Home/>} />
          <Route path='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/cart' element={<Cart/>} />
          <Route path='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/order' element={<PlaceOrder/>} />
          <Route path='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/verify' element={<Verify/>} />
          <Route path='/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
