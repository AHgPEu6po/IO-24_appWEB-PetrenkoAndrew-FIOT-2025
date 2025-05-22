import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Страва</p>
          <p>Назва</p>
          <p>Ціна</p>
          <p>Кількість</p>
          <p>Загалом</p>
          <p>Вилучити</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url +  "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₴{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₴{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={() => navigate('/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/order')}>Оформити замовлення</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Якщо ви маєте промокод, введіть його тут</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Промокод' />
              <button>Активувати</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
