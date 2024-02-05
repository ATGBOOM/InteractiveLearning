import gif from "../assets/movingMouse.gif";
import "../index.css";
import { useState, useEffect } from "react";
import checkboxEmpty from "../assets/checkboxEmpty.svg";
import checkboxFilled from "../assets/checkboxFilled.png";
import { Link, Outlet } from "react-router-dom";

function UsingMouseDirections() {
  const [right, setRight] = useState(checkboxEmpty);
  const [left, setLeft] = useState(checkboxEmpty);
  const [up, setUp] = useState(checkboxEmpty);
  const [down, setDown] = useState(checkboxEmpty);
  const [countChecks, setCountChecks] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      // Get the change in mouse position
      const deltaX = e.movementX;
      const deltaY = e.movementY;

      // Determine the direction based on deltaX and deltaY

      if (deltaX > 10 && right === checkboxEmpty) {
        setRight(checkboxFilled);
        setCountChecks(countChecks + 1);
      } else if (deltaX < -10 && left === checkboxEmpty) {
        setLeft(checkboxFilled);
        setCountChecks(countChecks + 1);
      }

      if (deltaY > 10 && down === checkboxEmpty) {
        setDown(checkboxFilled);
        setCountChecks(countChecks + 1);
      } else if (deltaY < -10 && up === checkboxEmpty) {
        setUp(checkboxFilled);
        setCountChecks(countChecks + 1);
      }
      console.log("mousemoved", countChecks);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <h1>
        {" "}
        We will now learn how to move the cursor on the screen so we can select
        on objects{" "}
      </h1>
      <br></br>
      <h3>
        move your mouse in the same direction you wants to move ur cursor as
        shown on the gif below
      </h3>
      <br />
      <div className="row">
        <div className="column">
          <img className="mouseGIF" src={gif}></img>
        </div>
        <br />
        <div className="column">
          <ul className="ulNoCheck">
            <li>
              <img className="checkbox" src={right}></img>
              Move to the right
            </li>
            <li>
              <img className="checkbox" src={left}></img>
              Move to the left
            </li>
            <li>
              <img className="checkbox" src={down}></img>
              Move down
            </li>
            <li>
              <img className="checkbox" src={up}></img>
              Move up
            </li>
          </ul>
        </div>
        <Link to="/mousebtn">
          <button className="continuebtn"> Continue</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default UsingMouseDirections;
