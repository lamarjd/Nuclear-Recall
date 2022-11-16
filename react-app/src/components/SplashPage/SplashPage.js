import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginFormModal from "../auth/LoginFormModal/index.js";
// import SignupFormModal from "../SignupFormModal";
import logo from "../../assets/mushroom2.png";
// import splash2 from "../assets/images/splash2.jpg";
import "./SplashPage.css";

function SplashPage({ user }) {
    // const user = useSelector((state) => state.session.user)

    // console.log("current user", currentUser)

  return (
    <>
      {!user && (
        <div className="splash-container">
          {/* <div className="splash-content"> */}
            <div className="splash-picture-container">
              <div className="top-left">
                <img id="logo" alt="logo" src={logo} />
              </div>

              <div className="center">
                <h1>Say no to the Nuclear Thought Fallout</h1>
                {/* <h3>It's time to take charge of your day and start being productive, which means to</h3>  */}
                
                <h3 className="underline">Log in and STOP FORGETTING THINGS</h3>

                {/* <h5>For Real Just Stop</h5> */}
                <LoginFormModal/>
                
              </div>
            </div>{" "}
            <br />
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default SplashPage;