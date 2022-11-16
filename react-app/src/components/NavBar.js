import React, { useState } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoutButton from "./auth/LogoutButton";
import bert from "../assets/bert.PNG"
import LoginFormModal from './auth/LoginFormModal/index'
import "./NavBar.css";

import './navbar.css'

const NavBar = ({ user }) => {
  // const user = useSelector(state => state.session.user)
  console.log("current user" , user)

  return ( 
    <nav>

      <div className="nav-wrapper">
        <div className="nav-content">
          {/* <div className="bert"> */}
            {/* <img id="bert" alt="bert" src={bert}/> */}
          {/* </div> */}

        <div>
          <NavLink to="/all" exact={true} activeClassName="active">
          {!user ? 
          ( <p>Home</p> ) : ( <p>Tasks</p> )
          }
          </NavLink>
        </div>


        <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            <p>Users</p>
          </NavLink>
        </div>

      {!user &&
      <>
        {/* <div> */}
          
          {/* <NavLink to="/login" exact={true} activeClassName="active">        
              <p><LoginFormModal /></p>        
          </NavLink>
        </div> */}

        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <p>Sign Up</p>
          </NavLink>
        </div>
      </>
      }

      {user &&
        <LogoutButton />      
      }
      
      
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
