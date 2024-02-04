import useUserData from '../../../hooks/useUserData.js';
import ProfilePicture from './ProfilePicture.jsx';

const ProfileInfo = () => {

  const user = useUserData();

  return(
    <>
      <div>
        {/*picture component, pass profile picture*/}
        <ProfilePicture/>
        <div>
        </div>
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
    </>
  )
};

export default ProfileInfo;
