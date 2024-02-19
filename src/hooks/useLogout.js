import requestWithCredentials from "../services/requestWithCredentials";

const useLogout = () => {

  const API_ENDPOINT = 'http://localhost:8000/api/security/logout';

  requestWithCredentials.post(API_ENDPOINT)
  .then(() => window.location.reload())
  .catch((err) => {
      //TODO: err page
  })
};

export default useLogout;
