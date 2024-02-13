import { useState, useEffect } from "react";
import requestWithCredentials from '../services/requestWithCredentials';

const useIsLogged = () => {

  const [isLogged, setIsLogged] = useState(false);

  const API_ENDPOINT = 'http://localhost:8000/api/security/is-logged-in';

  useEffect(() => {
    requestWithCredentials.get(API_ENDPOINT)
    .then((res) => {
        setIsLogged(res.data.loggedIn);
      })
    .catch((err) => {
        //TODO: error page
      })
  }, [])

  return isLogged;
};

export default useIsLogged;
