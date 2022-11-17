import React, { useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoutButton from "./auth/LogoutButton";
import bert from "../assets/bert.PNG"
import LoginFormModal from './auth/LoginFormModal/index'
// import "./NavBar.css";
// import './navbar.css'
import SearchBar from './searchBar';


const NavBar = ({ user }) => {

  console.log("current user" , user)

  return ( 
    <nav>

      <div className="nav-wrapper">
        <div className="nav-content">

        {/* <div>
          {!user ? (
          <NavLink to="/" exact={true} activeClassName="active">
           <p>Home</p> 
          </NavLink>
          ) : (
          <NavLink to="/all" exact={true} activeClassName="active">
           <p>Tasks</p> 
          </NavLink>
          )
          }
        </div> */}


        {/* <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            <p>Users</p>
          </NavLink>
        </div> */}

      {/* {!user &&
      <>
        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <p>Sign Up</p>
          </NavLink>
        </div>
      </>
      } */}

      {user &&
      <Route path ="/">
        <p>Menu Icon</p>
        <SearchBar/>
      </Route>
      }
      
      
      </div>

          <LogoutButton />      
          {/* <SearchBar/> */}
        
      </div>
    </nav>
  );
};


export default NavBar;
