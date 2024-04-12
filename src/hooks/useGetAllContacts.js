import { useEffect, useState } from "react";
import useUsername from "./useUsername";
import axios from "axios";

const useGetAllContacts = () => {
  const username = useUsername();

  const endpoint = "http://localhost:8000/api/account/contacts/all-info";

  const [contactsAll, setContactsAll] = useState();

  useEffect(() => {
    axios
      .post(endpoint, { username }, { withCredentials: true })
      .then((res) => setContactsAll(res.data))
      .catch((err) => console.log(err));
  }, [username]);

  return contactsAll;
};

export default useGetAllContacts;
