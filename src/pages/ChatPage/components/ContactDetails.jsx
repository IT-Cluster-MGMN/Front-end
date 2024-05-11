import Avatar from "../../../components/Avatar";

const ContactDetails = ({ selectedContact }) => {
  return (
    <div className="flex flex-col  w-[30%] m-2 p-2 border-zinc-500 border-solid border-[1px] h-fit rounded-[0.6rem]">
      <Avatar
        className={"w-[5rem] aspect-square self-center bg-white rounded-full"}
      />
      <div className="flex flex-col">
        <label className="font-sans text-white">Name</label>
        <label className="font-sans text-white">Contacts</label>
      </div>
    </div>
  );
};

export default ContactDetails;
