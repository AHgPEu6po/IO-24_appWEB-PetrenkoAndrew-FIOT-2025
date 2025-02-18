import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Представляємо наше меню</h1>
      <p className='explore-menu-text'>Вибирайте з різноманітного меню, що включає вишукані страви, приготовані з найкращих інгредієнтів. Наша місія - задовольнити ваші бажання та приправити ваше життя смакотою.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index)=>{
            return (
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
