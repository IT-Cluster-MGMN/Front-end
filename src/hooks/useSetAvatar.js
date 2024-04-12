import useUsername from "./useUsername";

const useSetAvatar = (avatar) => {
  const username = useUsername();
  const AVATAR = "http://localhost:8000/api/account/avatar/set";

  fetch(avatar)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], "file", { type: "image/jpeg" });
      const formData = new FormData();
      formData.append("username", username);
      formData.append("avatar", file, "image.jpg");
      axios.post(AVATAR, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
    });
};

export default useSetAvatar;
