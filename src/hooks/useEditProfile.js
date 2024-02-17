import requestWithCredentials from "../services/requestWithCredentials"

const useEditProfile = (data) => {

  const API_ENDPOINT = 'http://localhost:8000/api/account/update/personal';

  requestWithCredentials.patch(API_ENDPOINT, data)
  .catch((err) => {
      console.log(err)
      //TODO: product page;
    })
};

export default useEditProfile;
