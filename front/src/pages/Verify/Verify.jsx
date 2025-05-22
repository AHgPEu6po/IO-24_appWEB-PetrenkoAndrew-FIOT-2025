import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url, token, setCartItems} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
      try {
        if (!token) {
            return null
        }

        const response = await axios.post(url + '/api/order/verify', {success,orderId}, {headers:{token}})

        if (response.data.success) {
          setCartItems({})
          navigate('/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/myorders')
        } else {
          navigate('/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/cart')
        }

      } catch (error) {
          console.log(error)
      }
    }

    useEffect(()=>{
      verifyPayment()
    },[token])

  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  )
}

export default Verify
