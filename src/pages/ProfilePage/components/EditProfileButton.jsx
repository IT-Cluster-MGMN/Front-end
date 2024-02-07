import {FaPen} from 'react-icons/fa'

const EditProfileButton = ({onClick}) => {

  return(
    <button className='flex justify-center items-center h-[2rem] border-none bg-inherit hover:bg-zinc-200 w-[2rem] aspect-square rounded-full' onClick={onClick}>
      <FaPen />
    </button>
  )
};

export default EditProfileButton;
