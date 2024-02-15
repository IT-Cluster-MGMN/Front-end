import useEditProfile from '../../hooks/useEditProfile';
import FilterSideBar from '../SearchPage/components/FilterSideBar';

const TestPage = () => {
  
  const data = {
    "name":"newname testtest",
    "surname":"newsname",
    "additional":"additional",
    "sex":"newsex",
    "date_birth":"datea",
    "username":"newemail@email.com"
  };

  const handleClick = () => {
      useEditProfile(data);
  }

  return(
    <>
      <button onClick={handleClick}>Button</button>
    </>
  );
};
export default TestPage;
