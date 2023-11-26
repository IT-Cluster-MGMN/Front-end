import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Regestration";
import Login from "./pages/Login";
import Home from "./pages/Home";

import "./pages/App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
