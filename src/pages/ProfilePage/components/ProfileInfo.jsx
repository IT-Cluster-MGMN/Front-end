import { FaViber } from "react-icons/fa";
import EditProfileButton from "./EditProfileButton";
import { BsTelegram } from "react-icons/bs";
import GreenButton from "../../../components/GreenButton";
import Loading from "../../../components/Loading";
import EmailLabel from "./EmailLabel";
import defaultProfile from "@/assets/profile.png";

const ProfileInfo = ({
  user,
  userHidden,
  contacts,
  contactsHidden,
  editClick,
  avatar,
}) => {
  console.log(userHidden);
  return (
    <>
      {user && contacts && avatar ? (
        <>
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row justify-between w-full items-center">
              <h2 className="font-sans text-white">Profile Info</h2>
              <EditProfileButton onClick={editClick} />
            </div>
            <div className="grid-cols-2 grid-rows-2 w-full h-full gap-2 grid">
              <div className="  col-start-1 row-start-1 row-span-2 bg-white p-2 rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div className="flex h-[30%] gap-y-2 flex-col w-full items-center justify-center">
                    <img
                      src={avatar ? avatar : defaultProfile}
                      className="w-[8.1rem] aspect-square  shadow-2xl  rounded-full"
                    />
                    <EmailLabel currentState={userHidden.username !== null}>
                      {user.username}{" "}
                      {userHidden.username === null ? "- hidden" : null}
                    </EmailLabel>
                  </div>
                  <div className=" flex flex-col">
                    <label
                      className={`font-sans font-bold ${userHidden.name === null ? "text-zinc-400" : null}`}
                    >
                      Name {userHidden.name === null ? "- hidden" : null}
                    </label>
                    {user.name ? (
                      <span
                        className={`font-sans ${userHidden.name === null ? "text-zinc-400" : null}`}
                      >
                        {user.name}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      className={`font-sans font-bold ${userHidden.surname === null ? "text-zinc-400" : null}`}
                    >
                      Surname {userHidden.surname === null ? "- hidden" : null}
                    </label>
                    {user.surname ? (
                      <span
                        className={`font-sans ${userHidden.surname === null ? "text-zinc-400" : null}`}
                      >
                        {user.surname}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      className={`font-sans font-bold ${userHidden.additional === null ? "text-zinc-400" : null}`}
                    >
                      Patronymic{" "}
                      {userHidden.additional === null ? "- hidden" : null}
                    </label>
                    {user.additional ? (
                      <span
                        className={`font-sans ${userHidden.additional === null ? "text-zinc-400" : null}`}
                      >
                        {user.additional}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-start-2 p-2 row-start-1 bg-white rounded-[1.5rem]">
                <div className="flex flex-col h-full gap-2">
                  <div className="flex flex-col gap-2">
                    <label
                      className={`font-sans font-bold ${userHidden.sex === null ? "text-zinc-400" : null}`}
                    >
                      Gender {userHidden.sex === null ? "- hidden" : null}
                    </label>
                    {user.sex ? (
                      <span
                        className={`font-sans ${userHidden.sex === null ? "text-zinc-400" : null}`}
                      >
                        {user.sex}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className={`font-sans font-bold ${userHidden.date_birth === null ? "text-zinc-400" : null}`}
                    >
                      Date of birth{" "}
                      {userHidden.date_birth === null ? "- hidden" : null}
                    </label>
                    {user.date_birth ? (
                      <span
                        className={`font-sans ${userHidden.date_birth === null ? "text-zinc-400" : null}`}
                      >
                        {user.date_birth}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2 col-start-2 row-start-2 bg-white rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div className="flex flex-col ">
                    <label
                      className={`font-sans font-bold ${contactsHidden.phone === null ? "text-zinc-400" : null}`}
                    >
                      Phone number{" "}
                      {contactsHidden.phone === null ? "- hidden" : null}
                    </label>
                    {contacts.phone ? (
                      <span
                        className={`font-sans ${contactsHidden.phone === null ? "text-zinc-400" : null}`}
                      >
                        {contacts.phone}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      className={`font-sans font-bold ${contactsHidden.viber === null ? "text-zinc-400" : null}`}
                    >
                      Viber {contactsHidden.viber === null ? "- hidden" : null}
                    </label>
                    {contacts.viber ? (
                      <span
                        className={`font-sans ${contactsHidden.viber === null ? "text-zinc-400" : null}`}
                      >
                        {contacts.viber}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      className={`font-sans font-bold ${contactsHidden.telegram === null ? "text-zinc-400" : null}`}
                    >
                      Telegram{" "}
                      {contactsHidden.telegram === null ? "- hidden" : null}
                    </label>
                    {contacts.telegram ? (
                      <span
                        className={`font-sans ${contactsHidden.telegram === null ? "text-zinc-400" : null}`}
                      >
                        {contacts.telegram}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading darkTheme={true} />
      )}
    </>
  );
};

export default ProfileInfo;
