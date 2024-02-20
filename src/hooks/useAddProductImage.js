import requestWithCredentials from "../services/requestWithCredentials";

const useAddProductImage = (images, id) => {

  const API_ENDPOINT = '';

  for(let i = 0; i < images.length; i++){

    const form = new FormData();
    form.append('id', id);
    form.append('file', images[i]);

    requestWithCredentials.post(API_ENDPOINT, form)
    .catch((err) => {
        console.log(err);
      })

  };

};

export default useAddProductImage;
