import React, {useContext, useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart from '../Assets/cart-icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src = {logo} style={{ width: '50px', height: '50px' }} alt = ""/>
            <p>
                Willow & Thread
            </p>
        </div>
        <ul className="nav-menu">
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
