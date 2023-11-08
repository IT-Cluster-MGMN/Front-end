import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Authentication/Registration"
import Login from "./Authentication/Login"

import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
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
