import React, {useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart from '../Assets/cart-icon.png'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src = {logo} style={{ width: '50px', height: '50px' }} alt = ""/>
            <p>
                Willow & Thread
            </p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop" ?<hr/> : <></>}</li>
            <li onClick={()=>{setMenu("men")}}>Men{menu==="men" ?<hr/> : <></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==="women" ?<hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids" ?<hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src = {cart} alt = "" style={{ width: '30px', height: '30px' }}/>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
