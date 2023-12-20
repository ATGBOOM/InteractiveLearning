import "./index.css";
import UsingMouse from "./components/usingMouse";
import Start from "./start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start/>}> </Route>
          <Route path="/mouse" element={<UsingMouse />}></Route>
        </Routes>
      </Router>
    </>
  );
  
}

export default App;
