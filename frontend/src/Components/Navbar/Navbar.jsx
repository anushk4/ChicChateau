import React, {useContext, useRef, useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

import nav_dropdown from '../Assets/dropdown_icon.png'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src = {logo} alt = ""/>
            <p>
                Willow & Thread
            </p>
        </div>
        <img className = 'nav-dropdown' onClick ={dropdown_toggle} style = {{height:'35px'}} src={nav_dropdown} alt="" />
        <ul ref = {menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu==="shop" ?<hr/> : <></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to='/men' style={{textDecoration: 'none'}}>Men</Link>{menu==="men" ?<hr/> : <></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to='/women' style={{textDecoration: 'none'}}>Women</Link>{menu==="women" ?<hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>{menu==="kids" ?<hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to = '/login'><button onClick={()=>{setMenu("login")}}>Login</button></Link>
            <Link to = '/cart'><img src = {cart} onClick={()=>{setMenu("cart")}} alt = "" style={{ width: '30px', height: '30px' }}/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
