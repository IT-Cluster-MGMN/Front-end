import { useEffect, useState } from "react";
import axios from "axios";

const useSellerAvatar = (username) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (username) {
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
        });
    }
  }, [username]);

  return avatar;
};

export default useSellerAvatar;
