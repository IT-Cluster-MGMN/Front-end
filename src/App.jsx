import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./components/Registration"
import Login from "./components/Login"
import Home from "./components/Home"
import ResetPassword from "./components/ResetPassword";
import ProductPage from "./components/ProductPage";
import TestPage from "./components/TestPage";

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
            <Route path="/products/:productId" element={<ProductPage/>} />
            <Route path="/test" element={<TestPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
