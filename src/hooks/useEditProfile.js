import requestWithCredentials from "../services/requestWithCredentials"

const useEditProfile = (data) => {

  const API_ENDPOINT = 'http://localhost:8000/api/account/update/personal';

  console.log(data)
  const toPost = data;

  requestWithCredentials.patch(API_ENDPOINT, toPost)
  .then(() => {
      console.log(data)
    })
  .catch((err) => {
      console.log(err)
      //TODO: product page;
    })
};

export default useEditProfile;
