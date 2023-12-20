import "./index.css";
import mouse from "./assets/mouse.png";
import trackpad from "./assets/trackpad.png";

import { Outlet, Link } from "react-router-dom";
function Start() {
  return (
    <>
      <h1>WHICH POINTING DEVICE DO YOU HAVE</h1>
      <div className="row">
        <div className="column">
          <Link to="/mouse">
            <img className="images" src={mouse} alt="Mouse" />
          </Link>
        </div>
        <div className="column">
          <img className="images" src={trackpad} alt="trackpad" />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Start;
