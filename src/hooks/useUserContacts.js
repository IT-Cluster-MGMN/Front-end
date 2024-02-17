import { useEffect, useState } from "react";
import requestWithCredentials from "../services/requestWithCredentials";
import useUsername from "./useUsername";

const useUserContacts = () => {
  
  const [data, setData] = useState(null)
  
  const username = useUsername();

  const API_ENDPOINT = 'http://localhost:8000/api/account/contacts';

  useEffect(() => {
    requestWithCredentials.post(API_ENDPOINT, username)
    .then((res) => {
        setData(res.data);
    })
    .catch((err) => {
        console.log(err);
      })
  });

  return data;
};

export default useUserContacts;
