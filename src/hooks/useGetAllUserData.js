import { useEffect, useState } from "react";
import useUsername from "./useUsername";
import axios from "axios";

const useGetAllUserData = () => {
  const username = useUsername();
  const [allData, setAllData] = useState();

  const endpoint = "http://localhost:8000/api/account/personal/all-info";

  useEffect(() => {
    axios
      .post(endpoint, { username }, { withCredentials: true })
      .then((res) => setAllData(res.data))
      .catch((err) => console.log(err));
  }, [username]);

  return allData;
};

export default useGetAllUserData;
