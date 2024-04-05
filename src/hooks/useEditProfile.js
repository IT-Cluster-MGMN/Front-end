import axios from "axios";
import requestWithCredentials from "../services/requestWithCredentials";

const useEditProfile = (data, contacts, hiddenPersonal, hiddenContacts) => {
  const API_PERSONAL = "http://localhost:8000/api/account/update/personal";
  const API_CONTACTS = "http://localhost:8000/api/account/update/contacts";
  const API_HIDDEN_PERSONAL =
    "http://localhost:8000/api/account/update/personal/hidden-fields";
  const API_HIDDEN_CONTACTS =
    "http://localhost:8000/api/account/update/contacts/hidden-fields";

  axios
    .all([
      requestWithCredentials.patch(API_PERSONAL, data),
      requestWithCredentials.patch(API_CONTACTS, contacts),
      requestWithCredentials.patch(API_HIDDEN_PERSONAL, hiddenPersonal),
      requestWithCredentials.patch(API_HIDDEN_CONTACTS, hiddenContacts),
    ])
    .then(() => window.location.reload(false))
    .catch((err) => console.log(err));
};

export default useEditProfile;
