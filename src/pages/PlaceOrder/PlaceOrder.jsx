import React, { useContext } from 'react'
import './PlaceOrder.css'
import '../Cart/Cart.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Адреса доставки</p>
        <div className="multi-fields">
          <input type="text" placeholder='Призвіще' />
          <input type="text" placeholder="Ім'я" />
        </div>
        <input type="email" placeholder='Пошта' />
        <input type="text" placeholder='Вулиця' />
        <div className="multi-fields">
          <input type="text" placeholder='Місто' />
          <input type="text" placeholder="Область" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Поштовий індекс' />
          <input type="text" placeholder="Країна" />
        </div>
        <input type="text" placeholder='Телефон' />
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
