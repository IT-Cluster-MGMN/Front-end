import { useEffect, useState } from "react";
import useUsername from "./useUsername.js";
import requestWithCredentials from "../services/requestWithCredentials.js";

const useUserData = () => {
  const USERDATA_API = "http://localhost:8000/api/account/personal";

  const username = useUsername();

  const [user, setUser] = useState(null);

  useEffect(() => {
    requestWithCredentials
      .post(USERDATA_API, { username: username })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        // TODO: make universal error page(with props)
        console.log(err);
      });
  }, [user]);

  return user;
};

export default useUserData;
