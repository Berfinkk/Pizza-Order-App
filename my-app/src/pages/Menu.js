import React from 'react'
import '../styles/Menu.css'
import { MenuList } from '../helpers/MenuList'
import List from '../components/List'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((list,key)=>{
         return <List 
         key={key}
         image={list.image}
         name={list.name}
         price={list.price}/>
        })}
      </div>
    </div>
  )
}

export default Menu