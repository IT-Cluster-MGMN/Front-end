import { useEffect, useState } from "react";
import requestWithCredentials from "../services/requestWithCredentials";

const useSellerContacts = (username) => {
  const API_ENDPOINT = "http://localhost:8000/api/account/contacts";

  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (username) {
      requestWithCredentials
        .post(API_ENDPOINT, { username: username })
        .then((res) => {
          setContacts(res.data);
        })
        .catch((err) => { });
    }
  }, [username]);

  return contacts;
};

export default useSellerContacts;
