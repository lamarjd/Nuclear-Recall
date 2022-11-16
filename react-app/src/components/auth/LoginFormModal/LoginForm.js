import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import './loginForm.css'

const LoginForm = () => {
  
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

const demoUser = () => {
  setEmail('demo@aa.io');
  setPassword('password')
}


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} id='loginForm'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='outerlogindiv'>
        <label htmlFor='email' className='emailLoginLabel'>Email</label>
        <input
          className='loginemailbox'
          id='loginemailboxid'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='outerlogindiv'>
        <label htmlFor='password' className='emailLoginLabel'>Password</label>
        <input
          className='loginemailbox'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        
      </div>
      <button id='loginButton' type='submit'>Login</button>
      <button className="demo" onClick={demoUser}>Demo User</button>

    </form>
  );
};

export default LoginForm;
