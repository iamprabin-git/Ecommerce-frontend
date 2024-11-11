import React, { useContext, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
import { AuthContext } from '../contexts/AuthProvider';

const NavItem = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // Auth info
    const {user} = useContext(AuthContext)
    console.log(user)

    // addevent listner
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false)
        }
    })
    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInup" : ""}`}>
            {/* header top start */}
            {/* <div className={`header-top  ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to="/login">log in</Link>
                    </div>
                </div>
            </div> */}
            {/* header botton */}
            <div className='header-botton'>
                <div className='cotainer'>
                    <div className='header-wrapper'>
                        {/* logo */}
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src="{logo}" alt="" />
                                </Link>

                            </div>

                        </div>
                        {/* Menu  */}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>

                                </ul>

                            </div>
                            {/* sign in and log in  */}
                            <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Log in</Link>
                            {/* Menu toggler */}
                            <div onClick={()=>{setMenuToggle(!menuToggle)}} className={`header-bar d-lg-none ${menuToggle ? "active" : ""} `}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* Social toggle */}
                            <div className='ellepsis-bar d-md-none' onClick={()=> setSocialToggle(!socialToggle)}>

                            <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavItem
