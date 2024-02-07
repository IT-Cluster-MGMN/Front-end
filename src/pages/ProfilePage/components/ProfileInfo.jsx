import useUserData from '../../../hooks/useUserData.js';
import ProfilePicture from './ProfilePicture.jsx';

const ProfileInfo = () => {

  const user = useUserData();

  return(
    <>
      <h1>Profile information</h1>
      { user ? (
        <div>
          {/*user data: name, surname, phone, patronymic, phonenumber, etc*/}
          <div>
            <label>Email</label>
            <span>{user.username}</span>
          </div>
          <div>
            <label>Email</label>
            <span>{user.username}</span>
          </div>
          <div>
            <label>Email</label>
            <span>{user.username}</span>
          </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}
    </>
  )
};

export default ProfileInfo;
