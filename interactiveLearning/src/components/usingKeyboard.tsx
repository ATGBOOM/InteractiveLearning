import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function UsingKeyboard() {
  const [enteredPhrase, setEnteredPhrase] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const correctPhrase = "I understand! 123"; // Replace with your correct phrase

  const handleInputChange = (e: any) => {
    setEnteredPhrase(e.target.value);
  };

  const handleCheckButtonClick = () => {
    setIsCorrect(enteredPhrase === correctPhrase);
    setButtonClicked(true);
  };
  return (
    <>
      <h1>Keyboards are used to enter text and use shortcuts</h1>
      <br />
      <br />
      <h3>
        In the field below enter the phrase: I understand! 123. Then click on
        the check button to see if you have entered it correctly
      </h3>
      <br />
      <label>
        Enter the correct phrase:
        <input type="text" value={enteredPhrase} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleCheckButtonClick}>Check</button>
      <br />
      {buttonClicked && isCorrect && (
        <div>
          <p>Correct phrase entered!</p>
          <br />
          <Link to="/navigating">
          <button>continue</button>
          </Link>
          <Outlet/>
        </div>
      )}
      {buttonClicked && !isCorrect && <p>Incorrect phrase. Try again.</p>}
    </>
  );
}

export default UsingKeyboard;
