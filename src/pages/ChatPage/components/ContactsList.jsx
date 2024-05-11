import Loading from "../../../components/Loading";
import MiniProfile from "./MiniProfile";

const ContactsList = ({ search = null }) => {
  const data = [];
  return (
    <>
      {data ? (
        <div className="p-2 bg-darkgrey">
          {data.map((item) => (
            <MiniProfile item={item} lastMessage={true} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ContactsList;
