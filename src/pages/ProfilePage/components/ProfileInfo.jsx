import { FaViber } from "react-icons/fa";
import EditProfileButton from "./EditProfileButton";
import { BsTelegram } from "react-icons/bs";
import GreenButton from "../../../components/GreenButton";
import Loading from "../../../components/Loading";

const ProfileInfo = ({ user, contacts, editClick }) => {
  return (
    <>
      {user && contacts ? (
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
                      src="../../../../public/profile-svgrepo-com.svg"
                      className="w-[30%] aspect-square p-2 shadow rounded-full"
                    />
                    <GreenButton>{user.username}</GreenButton>
                  </div>
                  <div className=" flex flex-col">
                    <label className="font-sans">Name</label>
                    {user.name ? (
                      <span className="font-sans">{user.name}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-sans">Surname</label>
                    {user.surname ? (
                      <span className="font-sans">{user.surname}</span>
                    ) : (
                      <span className="font-sans">-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-sans">Patronymic</label>
                    {user.additional ? (
                      <span className="font-sans">{user.additional}</span>
                    ) : (
                      <span className="font-sans">-</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-start-2 p-2 row-start-1 bg-white rounded-[1.5rem]">
                <div className="flex flex-col h-full gap-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans">Sex</label>
                    {user.sex ? (
                      <span className="font-sans">{user.sex}</span>
                    ) : (
                      <span className="font-sans">-</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans">Date of birth</label>
                    {user.date_birth ? (
                      <span className="font-sans">{user.date_birth}</span>
                    ) : (
                      <span className="font-sans">-</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2 col-start-2 row-start-2 bg-white rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div className="flex flex-col ">
                    <label className="font-sans">Phone number</label>
                    {contacts.phone ? (
                      <span className="font-sans">{contacts.phone}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-sans">Viber</label>
                    {contacts.viber ? (
                      <span className="font-sans">{contacts.viber}</span>
                    ) : (
                      <span className="font-sans">-</span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <label className="font-sans">Telegram</label>
                    {contacts.telegram ? (
                      <span className="font-sans">{contacts.telegram}</span>
                    ) : (
                      <span className="font-sans">-</span>
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
