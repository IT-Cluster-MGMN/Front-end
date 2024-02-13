import requestWithCredentials from "../services/requestWithCredentials"

const useEditProfile = (data) => {

  const API_ENDPOINT = '';
  requestWithCredentials.post(API_ENDPOINT, data)
  .catch((err) => {
      //TODO: product page;
    })
};

export default useEditProfile;
