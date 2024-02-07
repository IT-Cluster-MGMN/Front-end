const Avatar = () => {

  const avatar = null; //TODO: make hook that loads pfp

  return(
    <>
      <div className="w-[60%]  aspect-square m-[3rem] rounded-full overlay-hidden">
        {avatar ? (
          <img src={avatar}/>
        ) : (
          <img src='../../public/profile.png'/>
        )}
      </div>
    </>
  )
};

export default Avatar;
