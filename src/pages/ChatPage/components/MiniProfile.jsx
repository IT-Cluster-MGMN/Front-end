import Avatar from "../../../components/Avatar";

const MiniProfile = ({ item, lastOnline = false, lastMessage = false }) => {
  return (
    <>
      <div className="flex flex-row bg-darkgrey h-fit gap-4 p-2">
        <Avatar className={"w-[3rem] aspect-square bg-white rounded-full"} />
        <div className="flex flex-col justify-around">
          <label className="font-sans text-white">Name</label>
          <label className="font-sans text-zinc-300 text-[0.8rem]">
            Last online
          </label>
        </div>
      </div>
    </>
  );
};

export default MiniProfile;
