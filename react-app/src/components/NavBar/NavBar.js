
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './navbar.css'

const NavBar = () => {
  return (
    <nav id='navidout'>
      <ul className='navnavbar'>
        <li className='listnavbar'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='listnavbar'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className='listnavbar'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li className='listnavbar'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li className='listnavbar'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
