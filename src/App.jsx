import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TestPage from "./pages/TestPage/TestPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage"; 
import SellPage from "./pages/SellPage/SellPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<RegistrationPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/resetpassword" element={<ResetPasswordPage/>} />
            <Route path="/product/:productId" element={<ProductPage/>} />
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/test" element={<TestPage/>} />
            <Route path="/favourite" element={<FavouritesPage/>} />
            <Route path="/sell" element={<SellPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
