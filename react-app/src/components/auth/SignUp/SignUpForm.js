import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../../store/session';
import "./signUpForm.css"
import bert from './bertTheTurtle.png'



const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  useEffect(() => {
    let validationErrors = []

    if (!username || username.length < 3) {
      validationErrors.push("Please provide a valid username. Username must be longer than 3 characters")
    }

    if (!email) {
      validationErrors.push("Please provide a valid email")
    }

    if (!first_name) {
      validationErrors.push("Please provide a first name")
    }
    
    if (!last_name) {
      validationErrors.push("Please provide a last name")
    }
    
    if (!password) {
      validationErrors.push("Please provide a password")
    }
    
    if (password != repeatPassword) {
      validationErrors.push("Passwords must match")
    }
    if (email.search('@') === -1 ){
      validationErrors.push("Please enter a REAL email address")
    }  

    setErrors(validationErrors)
    console.log("ERRORS", errors)

  }, [first_name, last_name, username, email, password, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();


    if (password === repeatPassword) {
      setErrors([])
      
      const data = dispatch(signUp(username, email, first_name, last_name, password));

      // if (data) {
      //   setErrors(data)
      // }
    }
  };



  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <nav className='signupNavBar'>
    <NavLink to="/" exact={true} activeClassName="active">
      <h1>Go Back</h1>
    </NavLink>



    </nav>
    <div className='outermostSignupDiv'>
      <div className='imageSignupDiv'>
      <img src={bert} alt="Girl in a jacket" id='signupImage'/> 
      </div>
    <form onSubmit={onSignUp} id='signupForm'>
      <div>
      <ul>

        { errors.length > 0 &&
        errors.map((error, ind) => (
          <li key={ind}>
            {error} 
          </li>
          ))}
      </ul>
      </div>
      <div className='outerSignupDiv'>
        <label className='emailSignupLabel'>User Name</label>
        <input
          required
          id='userNameSignUpBox'
          className='signupemailbox'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='outerSignupDiv'>
        <label className='emailSignupLabel'>Email</label>
        <input
          required
          id='signInEmailBox'
          className='signupemailbox'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
    
      <div className='outerSignupDiv'>
          <label className='emailSignupLabel'>First Name</label>
          <input
            required
          id='firstnamesignupbox'
          className='signupemailbox'
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={first_name}
        ></input>
      </div>

      <div className='outerSignupDiv'>
          <label className='emailSignupLabel'>Last Name</label>
          <input
            required
          id='signUpLastNameBox'
          className='signupemailbox'
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={last_name}
        ></input>
      </div>

      <div className='outerSignupDiv'>
        <label className='emailSignupLabel'>Password</label>
        <input
          required
          id='passwordSignUpIdBox'
          className='signupemailbox'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>

      <div className='outerSignupDiv' id='outerRepeatPasswordDiv'>
        <label className='emailSignupLabel' >Repeat Password</label>
        <input
          required
          id='labelRepeatPassword'
          className='signupemailbox'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button id='signupButton' type='submit' disabled={errors.length > 0} >Sign Up</button>
    </form>
    </div>
    </>
  );
};

export default SignUpForm;
