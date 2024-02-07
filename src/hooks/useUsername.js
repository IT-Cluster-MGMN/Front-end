import { useEffect, useState } from "react"
import requestWithCredentials from '../services/requestWithCredentials.js';

const useUsername = () => {

  const [username, setUsername] = useState(null);

  const USERNAME_ENDPOINT = '';

  useEffect(()=>{
    requestWithCredentials.get(USERNAME_ENDPOINT)
    .then((res)=>{
        setUsername(res.data.username);
      })
    .catch((err)=>{
        // TODO: make universal error page
      })
  });

  return username;
};

export default useUsername;
