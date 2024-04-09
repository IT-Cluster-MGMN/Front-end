import { useState } from "react";
import axios from "axios";
import useUsername from "./useUsername";

const useGetAvatar = () => {
  const username = useUsername();

  const [avatar, setAvatar] = useState(null);

  axios
    .post(
      "http://localhost:8000/api/account/avatar/get",
      {
        username,
      },
      { withCredentials: true },
    )
    .then((res) => setAvatar(res.data.photo));

  return avatar;
};

export default useGetAvatar;
