const MainImage = ({image}) => {

  return(
    <>
      <img src={image ? image : "../../../assets/not-found.png"}/>
    </>
  )
};

export default MainImage;
