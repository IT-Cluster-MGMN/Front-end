import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Registration/Registration"
import Login from "./Login/Login"

import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/reg" element={<Registration/>} />
            <Route path="/log" element={<Login/>} />

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
