import { RiContactsBook2Line } from "react-icons/ri";

const SearchContact = ({ onChange }) => {
  return (
    <>
      <div className="flex flex-row focus-within:outline focus-within:outline-zinc-500 items-center bg-darkgrey py-2 border-solid border-[1px] border-zinc-500 px-4 gap-2 rounded-[2rem]">
        <RiContactsBook2Line className="text-zinc-500" />
        <input
          placeholder="Знайти контакт"
          className="bg-inherit group text-white font-sans focus:outline-none border-none"
          onChange={(e) => onChange(e)}
        />
      </div>
    </>
  );
};

export default SearchContact;
