import React, { useContext, useEffect, useState  } from 'react'
import './PlaceOrder.css'
import '../Cart/Cart.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData(data => ({ ...data, [name]: value }))

  }

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems =[]
    food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 150
    }
    const response = await axios.post(url + '/api/order/place', orderData, { headers: { token } })
                    
    if (response.data.success) {
        const {session_url} = response.data
        window.location.replace(session_url)
    } else {
        alert("Error")
    }
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if (!token) {
      navigate('/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/cart')
    }
    else if (getTotalCartAmount()===0) {
      navigate('/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className="title">Адреса доставки</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Призвіще' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Ім'я" />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Пошта' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Вулиця' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Місто' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder="Область" />
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Поштовий індекс' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder="Країна" />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Телефон' />
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Загальна сума</h2>
          <div>
            <div className="cart-total-details">
              <p>Проміжний підсумок</p>
              <p>₴{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Оплата за доставку</p>
              <p>₴{getTotalCartAmount() === 0 ? 0 : 150}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Разом до сплати</b>
              <b>₴{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 150}</b>
            </div>
          </div>
          <button >Перейти до оплати</button>
        </div>
      </div>
    </form >
  )
}

export default PlaceOrder
