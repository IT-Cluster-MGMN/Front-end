import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
    const DROPDOWN_TEXT = 'font-sans font-semibold text-white text-[10px] no-underline';
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/data/username", {withCredentials:true})
        .then((response)=>{
            setUser(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [user])

    return(
        <>
            <div className="absolute right-0 z-10 self-start w-fit">
                <div className="flex flex-col">
                    {user ? (
            <>
              <span className="flex py-2 font-sans text-white bg-zinc-700 text-[0.8rem]">{user.username}</span>
              <Link className="no-underline " to='/profile'>
                <div className="flex items-center justify-center px-10 py-2 hover:bg-darkgrey bg-zinc-700">
                  <p className={DROPDOWN_TEXT}>Profile</p>
                </div>
              </Link>
            </>
                        
                    ):(<>
                    </>
                    )}
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
