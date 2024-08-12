import React, { useState } from 'react'
import "./navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

    const [active,setActive] = useState("shop");

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt='' />
                <p>Shopifyy</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setActive("shop")}><Link style={{textDecoration:"none"}} to={"/"}>Shop</Link>{active==="shop" && <hr />}</li>
                <li onClick={()=>setActive("men")}><Link style={{textDecoration:"none"}}  to={"/mens"}>Men</Link> {active==="men" && <hr />}</li>
                <li onClick={()=>setActive("women")}><Link style={{textDecoration:"none"}}  to={"/womens"}>Women</Link> {active==="women" && <hr />}</li>
                <li onClick={()=>setActive("kids")}><Link style={{textDecoration:"none"}}  to={"/kids"}>Kids</Link>{active==="kids" && <hr />}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration:"none"}}  to={"/login"}><button>Login</button></Link>
                <img src={cart_icon} alt='' onClick={()=>navigate("/cart")}/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
