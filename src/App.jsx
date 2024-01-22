import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./components/Registration"
import Login from "./components/Login"
import Home from "./components/Home"
import ResetPassword from "./components/ResetPassword";
import ProductPage from "./components/ProductPage";
import TestPage from "./components/TestPage";
import Favourite from "./components/Favourite.jsx";
import SellPage from "./components/SellPage.jsx";

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
            <Route path="/product/:productId" element={<ProductPage/>} />
            <Route path="/test" element={<TestPage/>} />
            <Route path="/favourite" element={<Favourite/>} />
            <Route path="/sell" element={<SellPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
