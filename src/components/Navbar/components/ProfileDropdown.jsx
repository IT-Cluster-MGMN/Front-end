import { Link } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";

const ProfileDropdown = ({ isLogged }) => {
  const DROPDOWN_TEXT =
    "font-sans font-semibold text-white text-[10px] no-underline";

  const handleExit = () => {
    useLogout();
  };

  return (
    <>
      <div className="absolute right-0 z-10 self-start w-fit">
        <div className="flex flex-col">
          {isLogged ? (
            <>
              <Link className="no-underline " to="/profile">
                <div className="flex items-center justify-center px-10 py-2 hover:bg-darkgrey bg-zinc-700">
                  <p className={DROPDOWN_TEXT}>Профіль</p>
                </div>
              </Link>
              <Link className="no-underline " to="/" onClick={handleExit}>
                <div className="flex items-center justify-center px-10 py-2 hover:bg-darkgrey bg-zinc-700">
                  <p className={DROPDOWN_TEXT}>Вийти</p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link className="no-underline" to={"/registration"}>
                <div className="flex items-center justify-center px-10 py-2 bg-zinc-700 hover:bg-darkgrey">
                  <p className={DROPDOWN_TEXT}>Зареєструватися</p>
                </div>
              </Link>
              <Link className="no-underline" to={"/login"}>
                <div className="flex items-center justify-center px-10 py-2 bg-zinc-700 hover:bg-darkgrey">
                  <p className={DROPDOWN_TEXT}>Увійти</p>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ProfileDropdown;
