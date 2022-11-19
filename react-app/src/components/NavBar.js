import React, { useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoutButton from "./auth/LogoutButton";
import bert from "../assets/bert.PNG"
import LoginFormModal from './auth/LoginFormModal/index'
import "./NavBar.css";
// import './navbar.css'
import SearchBar from './searchBar';
import bullet from './angryBullet.png'
import two from './two.png'
// import clip from './clip.png'
import bullets from "../assets/bullets.jpg"

const NavBar = ({ user }) => {

  

  return (
    <nav>

      <div className="nav-wrapper">
        <div className="nav-content">

      {user &&

        <div id='navbarlinkhome' >
        <NavLink  to="/all" exact={true} activeClassName="active">
          <img className='cliphomepagething' src={bullets}/>
          
     </NavLink>
      <NavLink  to="/all" exact={true} activeClassName="active" id="gohomenavbaractive">HOME</NavLink>
       
      </div>

      }
      <div className="search">
        <SearchBar/>
      </div>
      
      
      </div>
          <LogoutButton />         
      </div>
    </nav>
  );
};


export default NavBar;
