import axios from "axios";
import requestWithCredentials from "../services/requestWithCredentials.js";

const useRegisterUser = (
  mandatory,
  initialPersonal,
  initialContacts,
  avatar,
  setErrorMsg,
) => {
  const coodinatorEndpoint = "http://localhost:8000/api/coordinator/register";
  const AVATAR = "http://localhost:8000/api/account/create/images";
  // const rawData = {
  //   username: mandatory.username,
  //   password: mandatory.password,
  //   name: initialPersonal.name,
  //   surname: initialPersonal.surname,
  //   additional: initialPersonal.additional,
  //   sex: initialPersonal.sex,
  //   date_birth: initialPersonal.date_birth,
  //   phone: initialContacts.phone,
  //   telegram: initialContacts.telegram,
  //   viber: initialContacts.viber,
  // };

  const formData = new FormData();
  formData.append("username", mandatory.username);
  formData.append("password", mandatory.password);
  formData.append("name", initialPersonal.name);
  formData.append("surname", initialPersonal.surname);
  formData.append("additional", initialPersonal.additional);
  formData.append("sex", initialPersonal.sex);
  formData.append("date_birth", initialPersonal.date_birth);
  formData.append("phone", initialContacts.phone);
  formData.append("telegram", initialContacts.telegram);
  formData.append("viber", initialContacts.viber);

  if (avatar) {
    fetch(avatar)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "file", { type: "image/jpeg" });
        formData.append("avatar", file, "image.jpg");
      });
  } else {
    fetch(
      "data:image/jpeg;base64,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",
    )
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "file", { type: "image/jpeg" });
        formData.append("avatar", file, "image.jpg");
      });
  }

  axios
    .post(coodinatorEndpoint, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
      data: rawData,
    })
    .then(() => {
      window.location.href = "../";
    })
    .catch((err) => {
      setErrorMsg(err.message);
    });
};

export default useRegisterUser;
