import { FaViber } from "react-icons/fa";
import EditProfileButton from "./EditProfileButton";
import { BsTelegram } from "react-icons/bs";

const ProfileInfo = ({ user, contacts, editClick }) => {
  return (
    <>
      {user && contacts ? (
        <>
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row justify-between w-full items-center">
              <h2>Profile Info</h2>
              <EditProfileButton onClick={editClick} />
            </div>
            <div className="grid-cols-2 grid-rows-2 w-full h-full gap-2 grid">
              <div className="  col-start-1 row-start-1 row-span-2 bg-white p-2 rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div className="flex h-[30%] flex-col w-full items-center justify-center">
                    <img
                      src="../../../../public/profile.png"
                      className="w-[30%] aspect-square bg-red-50 rounded-full"
                    />
                    <p>{user.username}</p>
                  </div>
                  <div>
                    <label>Name:</label>
                    <br />
                    {user.name ? <span>{user.name}</span> : <span>-</span>}
                  </div>
                  <div>
                    <label>Surname:</label>
                    <br />
                    {user.surname ? (
                      <span>{user.surname}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div>
                    <label>Additional:</label>
                    <br />
                    {user.additional ? (
                      <span>{user.additional}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-start-2 p-2 row-start-1 bg-white rounded-[1.5rem]">
                <div className="flex flex-col h-full ">
                  <div>
                    <label>Sex:</label>
                    <br />
                    {user.sex ? <span>{user.sex}</span> : <span>-</span>}
                  </div>
                  <div>
                    <label>Birth Date:</label>
                    <br />
                    {user.date_birth ? (
                      <span>{user.date_birth}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2 col-start-2 row-start-2 bg-white rounded-[1.5rem]">
                <div className="flex flex-col">
                  <div>
                    <label>Phone number:</label>
                    <br />
                    {contacts.phone ? (
                      <span>{contacts.phone}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div>
                    <FaViber />
                    <br />
                    {contacts.viber ? (
                      <span>{contacts.viber}</span>
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                  <div>
                    <BsTelegram />
                    <br />
                    {contacts.telegram ? (
                      <span>{contacts.telegram}</span>
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
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProfileInfo;
