import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo2.jpg';

function Navbar(){
    let authuser = sessionStorage.getItem('Key_Veriable');
    if(authuser === 'USER'){
    return(
        
        <nav>
            <a href="#" to='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <lebel classname='menu-icon' for='menu-btn'>
                <span classname='nav-icon'>
                </span>
            </lebel>
            <ul classname='menu'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/dispprop">Property</NavLink></li>
              <li><NavLink to="/add">Add</NavLink></li>
              <li><NavLink to="/delete">Delete</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
        </nav>
    )
    }
    else {
        return(
            <nav>
            <a href="#" to='/' className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <lebel classname='menu-icon' for='menu-btn'>
                <span classname='nav-icon'>
                </span>
            </lebel>
            <ul classname='menu'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/signup">SignUp</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              {/* <li><NavLink to="/dispprop">Property</NavLink></li> */}
            </ul>
        </nav>

        )
        }
}

export default Navbar;