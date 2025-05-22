import React from 'react'
import './Orders.css'
import { useState } from 'react'
import {toast} from "react-toastify"
import axios from "axios";
import { useEffect } from 'react';
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    try {

      const response = await axios.get(url + '/api/order/list')
      if (response.data.success) {
        setOrders(response.data.data)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  const statusHandler = async (event, orderId) => {
    try {

      const response = await axios.post(url + '/api/order/status', { orderId, status: event.target.value })
      if (response.data.success) {
        await fetchAllOrders()
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  })

  return (
    <div className='order add'>
      <h3>Замовлення</h3>
      <div className='order-list'>
        {
          orders.map((order, index) => (
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, index) => {
                    if (index===order.items.length-1) {
                      return item.name + " x " + item.quantity
                    } else {
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}
                </p>
                <p className='order-item-name'>{order.address.firstName + ' ' + order.address.lastName}</p>
                <div className='order-item-address'>
                  <p>{order.address.street + ','}</p>
                  <p>{order.address.country + ', ' + order.address.city + ', ' + order.address.state + ', ' + order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              <p>Кількість страв: {order.items.length}</p>
              <p>₴{order.amount}</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
                <option value="Замовлення оформлено">Замовлення оформлено</option>
                <option value="Готування замовлення">Готування замовлення</option>
                <option value="Замовлення відправлено">Замовлення відправлено</option>
                <option value="Замовлення доставлено">Замовлення доставлено</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
