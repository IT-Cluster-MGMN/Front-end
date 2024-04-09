import React, { useState } from "react";
import Overlay from "../Overlay";
import { Link, useNavigate } from "react-router-dom";
import { BsGrid3X3Gap, BsFillHeartFill, BsFillTagsFill } from "react-icons/bs";
import ProfileDropdown from "./components/ProfileDropdown";
import CategoriesMenu from "./components/CategoriesMenu";
import SearchBar from "./components/SearchBar";
import useIsLogged from "../../hooks/useIsLogged";
import newlogo from "@/assets/newlogo.png";
import defaultProfile from "@/assets/profile.png";
import Avatar from "../Avatar";

const GENERIC_BUTTON_BACKGROUND =
  "flex rounded-[7px] hover:bg-zinc-700 w-full justify-center items-center h-7 py-2";
const GENERIC_TEXT =
  "font-sans opacity-100 font-bold text-white text-[15px] no-underline";
const MINOR_BUTTON_BACKGROUND =
  "flex rounded-[7px] hover:bg-zinc-700 w-full justify-center h-7 items-center gap-2 bg-inherit border-none";
// TODO: constant for search bar text

const Navbar = () => {
  const handleLoginAlert = () => { };

  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);

  const handleOpenProfileDropdown = () => {
    setOpenProfileDropdown(!openProfileDropdown);
    setOpenCategoriesMenu(false);
  };

  const handleOpenCategoriesMenu = () => {
    setOpenCategoriesMenu(!openCategoriesMenu);
    setOpenProfileDropdown(false);
  };

  const isLogged = useIsLogged();
  const navigate = useNavigate();

  const handleHomeRedirection = () => {
    navigate("../");
  };

  return (
    <>
      <nav
        className="
                bg-gradient-to-r
                from-[rgba(80,180,100,1)]
                from-[3%]
                via-[rgba(80,200,120,0.60)]
                via-[60%]
                to-[rgba(80,180,100,1)]
            backdrop-blur-lg
            z-10
            w-full
            sticky
            top-[0px]
            left-[0px]
            "
      >
        <div
          className="
                flex
                items-center
                px-[1%]
                py-[0.25%]
                gap-[1%]
                "
        >
          {/* Logo */}
          <div className="flex-1 w-fit h-fit">
            <img
              className="w-11 aspect-square cursor-pointer rounded-full"
              onClick={handleHomeRedirection}
              src={newlogo}
              alt="logo"
            />
          </div>
          {/* Home and catalogue */}
          <div className="flex cursor-pointer flex-row w-full max-w-[25%] justify-evenly gap-[5%]">
            {/* Home button */}
            <Link
              className={`${GENERIC_BUTTON_BACKGROUND} no-underline self-center max-h-3`}
              to="/"
            >
              <div className={`${GENERIC_TEXT} flex items-center gap-2`}>
                Home
              </div>
            </Link>
            {/* Catalogue button */}
            <button
              className={`${GENERIC_BUTTON_BACKGROUND} self-center gap-2 bg-inherit border-none`}
              onClick={handleOpenCategoriesMenu}
            >
              <div
                className={`${GENERIC_TEXT} flex items-center gap-2 bg-inherit border-none`}
              >
                Catalogue
                <BsGrid3X3Gap />
              </div>
            </button>
          </div>
          {/* Search bar */}
          <SearchBar />
          {/* Minor functional buttons */}
          <div className="flex flex-row items-center justify-evenly gap-[5%] py-2 w-full max-w-[20%]">
            <Link
              to={isLogged ? "../favourites" : "../login"}
              onClick={handleLoginAlert}
              className={`no-underline ${MINOR_BUTTON_BACKGROUND}`}
            >
              <BsFillHeartFill style={{ color: "white" }} />
              <p className={GENERIC_TEXT}>Favourite</p>
            </Link>
            <Link
              to={isLogged ? "../sell" : "../login"}
              onClick={handleLoginAlert}
              className={`no-underline ${MINOR_BUTTON_BACKGROUND}`}
            >
              <BsFillTagsFill style={{ color: "white" }} />
              <p className={GENERIC_TEXT}>Add Product</p>
            </Link>
          </div>
          {/* Profile icon */}
          <div className="flex-col w-[10%] grow:1">
            <Avatar
              className="bg-white w-[2.5rem] h-[2.5rem] cursor-pointer aspect-square rounded-full"
              onClick={handleOpenProfileDropdown}
            />
          </div>
        </div>
        {/* Dropdown menu */}
        {openProfileDropdown ? (
          <>
            <ProfileDropdown isLogged={isLogged} />
            <Overlay onClick={() => handleOpenProfileDropdown()} />
          </>
        ) : null}
        {/* Categories menu */}
        {openCategoriesMenu ? (
          <>
            <CategoriesMenu />
            <Overlay onClick={() => handleOpenCategoriesMenu()} />
          </>
        ) : null}
      </nav>
    </>
  );
};
export default Navbar;
