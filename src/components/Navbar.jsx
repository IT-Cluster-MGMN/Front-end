import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsGrid3X3Gap, BsFillHeartFill, BsFillTagsFill } from "react-icons/bs";

const GENERIC_BUTTON_BACKGROUND = 'flex rounded-[7px] hover:bg-zinc-700 w-full justify-center items-center h-7 py-2';
const GENERIC_TEXT = 'font-sans font-bold text-white text-[15px] no-underline';
const DROPDOWN_TEXT = 'font-sans font-semibold text-white text-[10px] no-underline';
const MINOR_BUTTON_BACKGROUND = 'flex rounded-[7px] hover:bg-zinc-700 w-full justify-center h-7 items-center gap-2 bg-inherit border-none';
// TODO: constant for search bar text

const Navbar = () => {

    const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

    const handleOpenProfileDropdown = () => {
        setOpenProfileDropdown(!openProfileDropdown)
    };



    return(
        <>
            <div className="flex flex-col">
                <nav className="
                bg-darkgrey
                w-screen
                absolute
                top-[0px]
                left-[0px]
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
                            <img className="h-11 w-11" src="logo_placeholder.png" alt="logo"/>
                        </div>
                        {/* Home and catalogue */}
                        <div className="flex flex-row w-full max-w-[25%] justify-evenly gap-[5%]">
                            {/* Home button */}
                            <Link className={`${GENERIC_BUTTON_BACKGROUND} no-underline self-center h-3`} to="/">
                                <div className={`${GENERIC_TEXT} flex items-center gap-2`}>
                                    Home
                                </div>
                            </Link>
                            {/* Catalogue button */}
                            <button className={`${GENERIC_BUTTON_BACKGROUND} self-center gap-2 bg-inherit border-none`}>
                                <div className={`${GENERIC_TEXT} flex items-center gap-2 bg-inherit border-none`}>
                                    Catalogue
                                    <BsGrid3X3Gap/>
                                </div>
                            </button>
                        </div>
                        {/* Search bar */}
                        <div 
                        className="
                        flex 
                        flex-row 
                        items-center 
                        w-full
                        bg-white 
                        rounded-[7px] 
                        px-2 
                        pb-[3px]
                        pt-2

                        border-b-[3px]
                        border-t-[0px]
                        border-x-[0px]
                        border-solid
                        border-white
                
                        focus-within:border-b-[3px]
                        focus-within:border-t-[0px]
                        focus-within:border-x-[0px]
                        focus-within:border-green-700
                        focus-within:border-solid

                        hover:border-b-[3px]
                        hover:border-t-[0px]
                        hover:border-x-[0px]
                        hover:border-green-700
                        hover:border-solid

                        delay-300 
                        duration-300 
                        hover:delay-300 
                        hover:duration-300
                        focus-within:delay-300
                        focus-within:delay-300
                        "
                        >
                            <BsSearch className="px-2"/>
                            <input className="
                            bg-white 
                            w-full 
                            h-full
                            border-none
                            font-sans
                            font-bold
                            text-black
                            text-[15px]
                            rounded-[7px]
                            !outline-none
                            "
                            type="text"
                            placeholder="Search"/>
                        </div>
                        {/* Minor functional buttons */}
                        <div className="flex flex-row items-center justify-evenly gap-[5%] py-2 w-full max-w-[20%]">
                            <button className={`${MINOR_BUTTON_BACKGROUND}`}>
                                <BsFillHeartFill style={{color:"white"}}/>
                                <p className={GENERIC_TEXT}>Favourite</p>
                            </button>
                            <button className={`${MINOR_BUTTON_BACKGROUND}`}>
                                <BsFillTagsFill style={{color:"white"}}/>
                                <p className={GENERIC_TEXT}>Sell</p>
                            </button>
                        </div>
                        {/* Profile icon */}
                        <div className="flex-col w-[10%] grow:1">
                            <button 
                            className="flex bg-white border-none rounded-full w-11 h-11"
                            onClick={handleOpenProfileDropdown}
                            >
                                <img className="self-stretch w-full opacity-100 hover:opacity-25" src="profile-svgrepo-com.svg" alt="Profile"/>
                            </button>
                        </div>
                    </div>
                    {/* Dropdown menu */}
                    {openProfileDropdown && (
                        <div className="absolute right-0 self-start text-white bg-black w-fit">
                            <div className="flex flex-col">
                                    <div className="flex items-center justify-center px-10 py-2 bg-zinc-700">
                                        <p className={DROPDOWN_TEXT}>Profile</p>
                                    </div>
                                    <div className="flex items-center justify-center px-10 py-2 bg-zinc-700">
                                        <p className={DROPDOWN_TEXT}>Exit</p>
                                    </div>
                                <Link className="no-underline" to={"/registration"}>
                                    <div className="flex items-center justify-center px-10 py-2 bg-zinc-700 hover:bg-darkgrey">
                                        <p className={DROPDOWN_TEXT}>Registration</p>
                                    </div>
                                </Link>
                                <Link className="no-underline" to={"/login"}>
                                    <div className="flex items-center justify-center px-10 py-2 bg-zinc-700 hover:bg-darkgrey">
                                        <p className={DROPDOWN_TEXT}>Login</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
};
export default Navbar;