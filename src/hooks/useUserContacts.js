import { useEffect, useState } from "react";
import requestWithCredentials from "../services/requestWithCredentials";
import useUsername from "./useUsername";

const useUserContacts = () => {
  const API_ENDPOINT = "http://localhost:8000/api/account/contacts";

  const username = useUsername();

  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    requestWithCredentials
      .post(API_ENDPOINT, { username: username })
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contacts]);

  return contacts;
};

export default useUserContacts;
