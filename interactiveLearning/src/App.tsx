import "./index.css";
import UsingMouseDirections from "./components/usingMouseDirections";
import Start from "./start";
import UsingMouseButtons from "./components/usingMouseButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsingKeyboard from "./components/usingKeyboard";
import Navigating from "./components/navigating";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}>
            {" "}
          </Route>
          <Route path="/mouse" element={<UsingMouseDirections />}></Route>
          <Route path="/mousebtn" element={<UsingMouseButtons />}></Route>
          <Route path="/key" element={<UsingKeyboard />}></Route>
          <Route path="/navigating" element={<Navigating />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
