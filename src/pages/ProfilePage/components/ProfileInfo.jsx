import { FaViber } from "react-icons/fa";
import EditProfileButton from "./EditProfileButton";
import { BsTelegram } from "react-icons/bs";
import GreenButton from "../../../components/GreenButton";
import Loading from "../../../components/Loading";
import EmailLabel from "./EmailLabel";
import defaultProfile from "../../../../public/images/profile.png";

const ProfileInfo = ({
  user,
  userHidden,
  contacts,
  contactsHidden,
  editClick,
  avatar,
}) => {
  return (
    <>
      {user && user.username && contacts && avatar ? (
        <>
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row justify-between w-full items-center">
              <h2 className="font-sans text-white">Інформація про вас</h2>
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
                      Ім'я {userHidden.name === null ? "- приховано" : null}
                    </label>
                    {user.name && user.name !== "null" ? (
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
                      Прізвище{" "}
                      {userHidden.surname === null ? "- приховано" : null}
                    </label>
                    {user.surname && user.surname !== "null" ? (
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
                      По-батькові{" "}
                      {userHidden.additional === null ? "- приховано" : null}
                    </label>
                    {user.additional && user.additional !== "null" ? (
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
                      Стать {userHidden.sex === null ? "- приховано" : null}
                    </label>
                    {user.sex && user.sex !== "null" ? (
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
                      День народження{" "}
                      {userHidden.date_birth === null ? "- приховано" : null}
                    </label>
                    {user.date_birth && user.date_birth !== "null" ? (
                      <span
                        className={`font-sans ${userHidden.date_birth === null ? "text-zinc-400" : null}`}
                      >
                        {new Date(user.date_birth).toLocaleDateString("ua-UA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
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
                      Номер телефону{" "}
                      {contactsHidden.phone === null ? "- приховано" : null}
                    </label>
                    {contacts.phone && contacts.phone !== "null" ? (
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
                      Viber{" "}
                      {contactsHidden.viber === null ? "- приховано" : null}
                    </label>
                    {contacts.viber && contacts.viber !== "null" ? (
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
                      {contactsHidden.telegram === null ? "- приховано" : null}
                    </label>
                    {contacts.telegram && contacts.telegram !== "null" ? (
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
