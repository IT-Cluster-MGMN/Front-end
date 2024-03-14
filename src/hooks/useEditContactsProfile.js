import requestWithCredentials from "../services/requestWithCredentials";

const useEditContactsProfile = (data) => {
  const API_ENDPOINT = "http://localhost:8000/api/account/update/contacts";
  console.log(data);

  requestWithCredentials.patch(API_ENDPOINT, data).catch((err) => {
    console.log(err);
  });
};

export default useEditContactsProfile;
