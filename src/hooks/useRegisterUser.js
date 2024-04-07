import axios from "axios";
import requestWithCredentials from "../services/requestWithCredentials.js";
import { useNavigate } from "react-router-dom";

const useRegisterUser = (
  mandatory,
  initialPersonal,
  initialContacts,
  setErrorMsg,
) => {
  const SECURITY = "http://localhost:8000/api/security/register";
  const PERSONAL = "http://localhost:8000/api/account/create/personal";
  const CONTACTS = "http://localhost:8000/api/account/create/contacts";
  const personal = initialPersonal;
  personal.username = mandatory.username;
  const contacts = initialContacts;
  contacts.username = mandatory.username;

  requestWithCredentials
    .post(SECURITY, mandatory)
    .then(() => {
      axios
        .all([
          requestWithCredentials.post(PERSONAL, personal),
          requestWithCredentials.post(CONTACTS, contacts),
        ])
        .then((res) => {
          window.location.href = "../";
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    })
    .catch((err) => {
      setErrorMsg(err.message);
    });
};

export default useRegisterUser;
