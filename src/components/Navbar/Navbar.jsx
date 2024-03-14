import React, { useState } from "react";
import Overlay from '../Overlay';
import { Link } from "react-router-dom";
import { BsGrid3X3Gap, BsFillHeartFill, BsFillTagsFill } from "react-icons/bs";
import ProfileDropdown from "./components/ProfileDropdown";
import CategoriesMenu from "./components/CategoriesMenu";
import SearchBar from "./components/SearchBar";
import useIsLogged from '../../hooks/useIsLogged';

const GENERIC_BUTTON_BACKGROUND = 'flex rounded-[7px] hover:bg-zinc-700 w-full justify-center items-center h-7 py-2';
const GENERIC_TEXT = 'font-sans font-bold text-white text-[15px] no-underline';
const MINOR_BUTTON_BACKGROUND = 'flex rounded-[7px] hover:bg-zinc-700 w-full justify-center h-7 items-center gap-2 bg-inherit border-none';
// TODO: constant for search bar text

const Navbar = () => {

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


    return (
        <>
            <nav className="
            bg-darkgrey
            z-10
            w-full
            sticky
            top-[0px]
            left-[0px]
            bg-opacity-100
            ">
                <div className="
                flex
                items-center
                px-[1%]
                py-[0.25%]
                gap-[1%]
                ">
                    {/* Logo */}
                    <div className="flex-1 w-fit h-fit">
                        <img className="h-11 w-11" src="logo_placeholder.png" alt="logo" />
                    </div>
                    {/* Home and catalogue */}
                    <div className="flex flex-row w-full max-w-[25%] justify-evenly gap-[5%]">
                        {/* Home button */}
                        <Link className={`${GENERIC_BUTTON_BACKGROUND} no-underline self-center max-h-3`} to="/">
                            <div className={`${GENERIC_TEXT} flex items-center gap-2`}>
                                Home
                            </div>
                        </Link>
                        {/* Catalogue button */}
                        <button className={`${GENERIC_BUTTON_BACKGROUND} self-center gap-2 bg-inherit border-none`}
                            onClick={handleOpenCategoriesMenu}>
                            <div className={`${GENERIC_TEXT} flex items-center gap-2 bg-inherit border-none`}>
                                Catalogue
                                <BsGrid3X3Gap />
                            </div>
                        </button>
                    </div>
                    {/* Search bar */}
                    <SearchBar />
                    {/* Minor functional buttons */}
                    <div className="flex flex-row items-center justify-evenly gap-[5%] py-2 w-full max-w-[20%]">
                        <Link to={isLogged ? "../favourites" : "../login"} className={`no-underline ${MINOR_BUTTON_BACKGROUND}`}>
                            <BsFillHeartFill style={{ color: "white" }} />
                            <p className={GENERIC_TEXT}>Favourite</p>
                        </Link>
                        <Link to={isLogged ? "../sell" : "../login"} className={`no-underline ${MINOR_BUTTON_BACKGROUND}`}>
                            <BsFillTagsFill style={{ color: "white" }} />
                            <p className={GENERIC_TEXT}>Add Product</p>
                        </Link>
                    </div>
                    {/* Profile icon */}
                    <div className="flex-col w-[10%] grow:1">
                        <button
                            className="flex bg-white border-none rounded-full w-11 h-11"
                            onClick={handleOpenProfileDropdown}
                        >
                            <img className="self-stretch w-full opacity-100 hover:opacity-25" src="profile-svgrepo-com.svg" alt="Profile" />
                        </button>
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
