import { Route, NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../auth/LoginFormModal/index.js";
// import SignupFormModal from "../SignupFormModal";
import logo from "../../assets/mushroom2.png";
// import splash2 from "../assets/images/splash2.jpg";
import "./SplashPage.css";

function SplashPage({ user }) {
  const sessionUser = useSelector((state) => state.session.user)

  if (user) {
    return <Redirect to='/all' />;
  }
  

  return (
    <>
      {/* SPLASH NAVBAR */}
      <nav>
        <div className="splash-nav-container">
          <div className="splash-nav-content">
            <div>
              {!user ? (
                <NavLink to="/" exact={true} activeClassName="active">
                  <p>Home</p>
                </NavLink>
              ) : (
                
                <NavLink to="/all" exact={true} activeClassName="active">
                  <p></p>
                </NavLink>
                
              )}
            </div>

            {!user && (
              <>
                <div>
                  <NavLink to="/sign-up" exact={true} activeClassName="active">
                    <p>Sign Up</p>
                  </NavLink>
                </div>
              </>
            )}

            {user && (
              <Route path="/">
                <LogoutButton />
              </Route>
            )}
          </div>
        </div>
      </nav>


      <div className="splash-picture-container">
        <div className="main-splash">
          <img id="logo" alt="logo" src={logo} />
        </div>


        {!user && (
          <div className="center">
            <h1>Say no to the Nuclear Thought Fallout</h1>

            <h3 className="underline">Log in and STOP FORGETTING THINGS</h3>

            <LoginFormModal user={user}/>
          </div>
        )}
      </div>{" "}
      <br />

    

    </>
  );
}

export default SplashPage;
