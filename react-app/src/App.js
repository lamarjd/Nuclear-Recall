import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch,NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import wqsa from './components/auth/LoginFormModal/index';
import SignUpForm from './components/auth/SignUp/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';
import TaskForm from './components/TaskForm';
import AllTasks from './components/TaskList';
import OneTask from './components/OneTask';
import OneList from './components/OneList';
import SplashPage from './components/SplashPage/SplashPage';
import CompletedAllTasks from './components/TaskList/CompleteTaskList';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)


  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <SplashPage user={user}/>
        </Route>
        <Route path='/login' exact={true}>
          <SplashPage user={user}/>
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute  exact path="/all/completed/">
          <CompletedAllTasks/>
        </ProtectedRoute>
        <ProtectedRoute path="/all/lists/:id">
          <OneList/>
        </ProtectedRoute>
        <ProtectedRoute path='/all/:id' exact={true}>
          <NavBar user={user}/>
          <OneTask/>
        </ProtectedRoute>
        <ProtectedRoute path='/all' exact={true} >
          <NavBar user={user}/>
          <HomePage/>
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
