import { useEffect, useState } from "react";
import requestWithCredentials from "../services/requestWithCredentials.js";

const useSellerPersonal = (username) => {
  const USERDATA_API = "http://localhost:8000/api/account/personal";

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (username) {
      requestWithCredentials
        .post(USERDATA_API, { username: username })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => { });
    }
  }, [username]);

  return user;
};

export default useSellerPersonal;
