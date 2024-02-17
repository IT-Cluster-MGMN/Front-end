import requestWithCredentials from "../services/requestWithCredentials";

const useEditContactsProfile = (data) => {

  const API_ENDPOINT = 'http://localhost:8000/api/account/update/contacts';

  requestWithCredentials.patch(API_ENDPOINT, data)
  .catch((err) => {
      console.log(err);
    })
};

export default useEditContactsProfile;
