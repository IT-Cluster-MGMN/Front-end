import Navbar from "../../components/Navbar/Navbar";
import SearchContact from "./components/SearchContact";
import ContactsList from "./components/ContactsList";
import ChatComponent from "./components/ChatComponent";
import ContactDetails from "./components/ContactDetails";

const ChatPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex flex-col">
        <Navbar />
        <div className="flex gap-2 flex-row bg-darkgrey w-[80%] self-center h-full px-4">
          <div className="flex flex-col py-2">
            <SearchContact />
            <ContactsList />
          </div>
          <ChatComponent selectedContact={null} />
          <ContactDetails selectedContact={null} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
