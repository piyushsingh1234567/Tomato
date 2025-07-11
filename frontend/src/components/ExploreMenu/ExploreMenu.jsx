import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Dive into a world of flavors with our carefully curated menu. From sizzling starters to mouthwatering mains and indulgent desserts, there’s something to satisfy every craving. Whether you’re a spice lover or prefer something mild, our menu has a dish just for you. Start exploring and treat your taste buds today!

</p>
<div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return(
           <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
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

export default ExploreMenu