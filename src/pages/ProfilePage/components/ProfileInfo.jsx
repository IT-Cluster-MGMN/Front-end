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
            <label>Email: </label>
            <span>{user.username}</span>
          </div>
          <div>
              <label>Name: </label>
            <span>{user.name}</span>
          </div>
          <div>
              <label>Surname: </label>
            <span>{user.surname}</span>
          </div>
          <div>
              <label>Patronymic: </label>
              <span>{user.additional}</span>
          </div>
          <div>
              <label>Sex: </label>
              <span>{user.sex}</span>
          </div>
          <div>
              <label>Birth date: </label>
              <span>{user.date_birth}</span>
          </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}
    </>
  )
};

export default ProfileInfo;
