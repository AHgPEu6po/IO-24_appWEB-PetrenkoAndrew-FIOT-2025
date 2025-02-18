import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Наш сервіс доставки преміум їжі пропонує вишуканий вибір страв для справжніх поціновувачів смаку, якості та індивідуального підходу. Ми співпрацюємо з найкращими ресторанами, щоб поєднати сучасні гастрономічні тенденції та класичну кулінарну майстерність. Кожна страва готується з найсвіжіших інгредієнтів і доставляється з увагою до деталей.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook} alt="" />
                <img src={assets.twitter} alt="" />
                <img src={assets.instagram} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Компанія</h2>
            <ul>
                <li>Домашня</li>
                <li>Про нас</li>
                <li>Доставка</li>
                <li>Політика конфіденційності</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Зв'яжіться з нами</h2>
            <ul>
                <li>050 777 77 77</li>
                <li>troyafood.support@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2025 TroyaFood.com. Всі права захищені.</p>
    </div>
  )
}

export default Footer
