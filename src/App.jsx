import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Authentication/Registration"
import Login from "./Authentication/Login"
import Home from "./Home/Home"
import ResetPassword from "./Authentication/ResetPassword";

import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/resetpassword" element={<ResetPassword/>} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="footer"> {/* Apply the "footer" class */}
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
