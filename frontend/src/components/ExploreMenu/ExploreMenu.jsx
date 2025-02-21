import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore a rich selection of mouthwatering dishes crafted to delight your taste buds. Our goal is to fulfill your cravings and enhance your dining experience, one flavorful meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            ) 
        })}
      </div>
      <hr />
    </div>
  )
}
//
export default ExploreMenu
