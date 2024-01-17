import Cookies from 'js-cookie';
import { useState } from 'react';

const TestPage = () => {

  const [token, setToken] = useState(0);
  Cookies.set('token', token, {secure: true});

  const handleClick = () => {
    setToken(token + 1);
  };

  return(
    <>
      <button onClick={handleClick}>
        Change token
      </button>
      <p>{Cookies.get('token')}</p>
      <p>{Cookies.get('accessToken')}</p>
    </>
  );
};
export default TestPage;