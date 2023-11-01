import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./Registration/Registration"
import Login from "./Login/Login"

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Registration/>} />
          <Route path="/log" element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
