import requestWithCredentials from "../services/requestWithCredentials";

const useAddProduct = (data, images) => {
  const IMAGES_ENDPOINT = "http://localhost:8000/api/product/add/image";
  const INFO_ENDPOINT = "http://localhost:8000/api/product/add";

  console.log(data);
  requestWithCredentials
    .post(INFO_ENDPOINT, { data })
    .then((res) => {
      console.log(res.data);
      // const id = res.data.id;
      // for (let i = 0; i < images.length; i++) {
      //   const form = new FormData();
      //   form.append("id", id);
      //   form.append("file", images[i]);
      //
      //   requestWithCredentials.post(IMAGES_ENDPOINT, form).catch((err) => {
      //     console.log(err);
      //   });
      // }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default useAddProduct;
