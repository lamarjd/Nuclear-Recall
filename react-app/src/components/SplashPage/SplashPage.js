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

              {/* {!user &&
                <NavLink to="/" exact={true} activeClassName="active">
                  <p>Home</p>
                </NavLink>

              } */}


            {/* <div>
              <NavLink to="/users" exact={true} activeClassName="active">
                <p>Users</p>
              </NavLink>
            </div> */}

            {!user && (
              <>
                <div className="splash-nav">

                <h2>Not a member yet?</h2>
                <br/>
                <a onClick={(e) => (window.location = 'https://github.com/lamarjd/Dont-Forget-The-Milk')}>Github Repository</a>



                  <NavLink id="sign-in" to="/sign-up" exact={true} activeClassName="active">
                    <h1>Sign Up</h1>
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
            <div className="aboutLinks">
                  <div className="author">
                      <p>Chirstopher Pannella</p>

                      <a onClick={(e) => (window.location = 'https://github.com/cpannella')}>Github</a>
                      <a onClick={(e) => (window.location = 'https://www.linkedin.com/in/chrisotpher-pannella-ab0852242/')}>LinkedIn</a>
                  </div>
                  <div className="author">
                      <p>Jake Lamar</p>
                      <a onClick={(e) => (window.location = 'https://github.com/lamarjd')}>Github</a>
                      <a onClick={(e) => (window.location = 'https://www.linkedin.com/in/jacob-lamar-73449040/')}>LinkedIn</a>

                  </div>
                  <div className="author">
                      <p>Tan Nguyen</p>
                      <a onClick={(e) => (window.location = 'https://github.com/Tan0699')}>Github</a>
                      <a onClick={(e) => (window.location = 'https://www.linkedin.com/in/tan-nguyen-8b0a8a257/')}>LinkedIn</a>
                  </div>
                  <div className="author">
                    <p>Richard Baine</p>
                    <a onClick={(e) => (window.location = 'https://github.com/Richard-M-Baine')}>Github</a>
                    <a onClick={(e) => (window.location = 'https://www.linkedin.com/in/richard-baine-87184b29/')}>LinkedIn</a>


                  </div>
                </div>
          </div>
        )}
      </div>{" "}
      <br />



    </>
  );
}

export default SplashPage;
