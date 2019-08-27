import React from 'react';
import Logout from './Logout';

const NavBar = ({onLogoutClick}) =>{
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            
        <h6 className="title-txt">Hello World Website</h6>
               
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Logout onLogoutClick={onLogoutClick} />
            </li>
            </ul>
        </div> 
    </nav>
    );
    
}

export default NavBar;