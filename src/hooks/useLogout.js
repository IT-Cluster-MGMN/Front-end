import requestWithCredentials from "../services/requestWithCredentials";

const useLogout = () => {

  const API_ENDPOINT = '';

  requestWithCredentials.post(API_ENDPOINT)
  .catch((err) => {
      //TODO: err page
  })
};

export default useLogout;
