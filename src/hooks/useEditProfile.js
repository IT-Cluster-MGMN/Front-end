import axios from "axios";
import requestWithCredentials from "../services/requestWithCredentials";

const useEditProfile = (
  data,
  contacts,
  avatar,
  hiddenPersonal,
  hiddenContacts,
  setErrorMsg,
) => {
  const PERSONAL = "http://localhost:8000/api/account/update/personal";
  const CONTACTS = "http://localhost:8000/api/account/update/contacts";
  const API_HIDDEN_PERSONAL =
    "http://localhost:8000/api/account/update/personal/hidden-fields";
  const API_HIDDEN_CONTACTS =
    "http://localhost:8000/api/account/update/contacts/hidden-fields";
  const AVATAR = "http://localhost:8000/api/account/avatar/set";

  fetch(avatar)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], "file", { type: "image/jpeg" });
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("avatar", file, "image.jpg");

      axios
        .all([
          requestWithCredentials.patch(PERSONAL, data),
          requestWithCredentials.patch(CONTACTS, contacts),
          requestWithCredentials.patch(API_HIDDEN_PERSONAL, hiddenPersonal),
          requestWithCredentials.patch(API_HIDDEN_CONTACTS, hiddenContacts),
          axios.patch(AVATAR, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }),
        ])
        .then(() => {
          localStorage.removeItem("avatar");
          window.location.reload();
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    });
};

export default useEditProfile;
