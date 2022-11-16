import React, { useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from './auth/LoginFormModal/index'
import "./NavBar.css";

import './navbar.css'

const NavBar = ({ user }) => {
  // const user = useSelector(state => state.session.user)
  console.log("current user" , user)

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

      {!user &&
      <>
        <div>
          
          <NavLink to="/login" exact={true} activeClassName="active">        
              <p><LoginFormModal /></p>        
          </NavLink>
        </div>

        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <p>Sign Up</p>
          </NavLink>
        </div>
      </>
      
      }
        <LogoutButton />      
      
      
      </div>
    </nav>
  );
};

export default NavBar;
