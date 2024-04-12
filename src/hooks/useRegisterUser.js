import axios from "axios";
import requestWithCredentials from "../services/requestWithCredentials.js";

const useRegisterUser = (
  mandatory,
  initialPersonal,
  initialContacts,
  avatar,
  setErrorMsg,
) => {
  const SECURITY = "http://localhost:8000/api/security/register";
  const PERSONAL = "http://localhost:8000/api/account/create/personal";
  const CONTACTS = "http://localhost:8000/api/account/create/contacts";
  const AVATAR = "http://localhost:8000/api/account/create/images";
  const personal = initialPersonal;
  personal.username = mandatory.username;
  const contacts = initialContacts;
  contacts.username = mandatory.username;
  if (avatar) {
    fetch(avatar)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "file", { type: "image/jpeg" });
        const formData = new FormData();
        formData.append("imagesRequest", mandatory.username);
        formData.append("avatar", file, "image.jpg");

        requestWithCredentials
          .post(SECURITY, mandatory)
          .then(() => {
            axios
              .all([
                requestWithCredentials.post(PERSONAL, personal),
                requestWithCredentials.post(CONTACTS, contacts),
                axios.post(AVATAR, formData, {
                  headers: { "Content-Type": "multipart/form-data" },
                  withCredentials: true,
                }),
              ])
              .then(() => {
                window.location.href = "../";
              })
              .catch((err) => {
                setErrorMsg(err.message);
              });
          })
          .catch((err) => {
            setErrorMsg(err.message);
          });
      });
  } else {
    requestWithCredentials
      .post(SECURITY, mandatory)
      .then(() => {
        axios
          .all([
            requestWithCredentials.post(PERSONAL, personal),
            requestWithCredentials.post(CONTACTS, contacts),
          ])
          .then(() => {
            window.location.href = "../";
          })
          .catch((err) => {
            setErrorMsg(err.message);
          });
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }
};

export default useRegisterUser;
