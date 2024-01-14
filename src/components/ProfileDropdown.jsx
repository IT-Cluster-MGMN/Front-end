import { Link } from "react-router-dom";

const ProfileDropdown = () => {
    const DROPDOWN_TEXT = 'font-sans font-semibold text-white text-[10px] no-underline';

    return(
        <>
            <div className="absolute right-0 self-start w-fit">
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
        </>
    );
};
export default ProfileDropdown;