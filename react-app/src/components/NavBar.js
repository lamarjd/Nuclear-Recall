import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  // console.log("current user" , user)

  return ( 
    <nav>

      <div className="nav-wrapper">
        
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            <p>Home</p>
          </NavLink>
        </div>


        <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            <p>Users</p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/login" exact={true} activeClassName="active">
            <p>Login</p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <p>Sign Up</p>
          </NavLink>
        </div>
      
        <LogoutButton />      
      
      
      </div>
    </nav>
  );
};

export default NavBar;
