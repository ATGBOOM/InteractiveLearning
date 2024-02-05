import diagram from "../assets/mouseDiagram.jpg";
import "../index.css";
import { Link, Outlet } from "react-router-dom";

function UsingMouseButtons() {
  const handClick = () => {
    alert(
      "great job on clicking. Now using roll your scroll wheel down to find the second button after closing this window. To close this, click on the 'OK' button."
    );
  };
  return (
    <>
      <h1>Now we will learn to use the buttons and scroll wheels on a mouse</h1>
      <br />
      <div className="row">
        <div className="column">
          <img className="images" src={diagram}></img>
        </div>
        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button onClick={handClick}>CLICK USING LEFT MOUSE BUTTON</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/key">
        <button>Well done! Now we move on to using the keyboard </button>
      </Link>
      <Outlet />
    </>
  );
}

export default UsingMouseButtons;
