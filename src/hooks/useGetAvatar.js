import { useEffect, useState } from "react";
import axios from "axios";
import useUsername from "./useUsername";

const useGetAvatar = () => {
  const username = useUsername();

  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const localAvatar = localStorage.getItem("avatar");
    if (localAvatar) {
      setAvatar(localAvatar);
    } else {
      axios
        .post(
          "http://localhost:8000/api/account/avatar/get",
          {
            username,
          },
          { withCredentials: true },
        )
        .then((res) => {
          setAvatar(res.data.photo);
          localStorage.setItem("avatar", res.data.photo);
        });
    }
  }, [username]);

  return avatar;
};

export default useGetAvatar;
