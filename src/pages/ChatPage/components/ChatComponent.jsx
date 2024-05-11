import MiniProfile from "./MiniProfile";
import { FiSend } from "react-icons/fi";

const ChatComponent = ({ selectedContact }) => {
  return (
    <div className="flex flex-col w-full h-full border-x-[1px] border-y-[0px] border-solid border-zinc-500">
      <MiniProfile item={selectedContact} lastOnline={true} />
      <div className="self-center h-full border-t-[1px] w-full border-solid border-b-[0px] border-x-[0px] border-zinc-500">
        ChatPlaceholder
      </div>
      <div className="flex flex-row gap-2 p-2 items-center border-t-zinc-500 border-t-[1px] border-solid border-b-[0px] border-x-[0px]">
        <input
          className="justify-self-end border-none w-full focus:outline-none text-white bg-inherit font-sans"
          placeholder="Написати"
        />
        <FiSend className="text-zinc-500" />
      </div>
    </div>
  );
};

export default ChatComponent;
