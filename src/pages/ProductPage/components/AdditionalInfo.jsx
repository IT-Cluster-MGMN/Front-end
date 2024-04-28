import Loading from "../../../components/Loading";
import useSellerAvatar from "../../../hooks/useSellerAvatar";
import useSellerContacts from "../../../hooks/useSellerContacts";
import useSellerPersonal from "../../../hooks/useSellerPersonal";
import EmailLabel from "../../ProfilePage/components/EmailLabel";
import SellerLabel from "./SellerLabel";

const AdditionalInfo = ({ personal, contacts, avatar, username }) => {
  return (
    <>
      {personal && contacts && avatar ? (
        <div className="flex h-full p-4 flex-row gap-8">
          <img
            src={avatar}
            className="self-center aspect-square w-[20rem] rounded-full"
          />
          <div className="flex flex-col w-full gap-8 self-center">
            <div className="self-center">
              <SellerLabel data={personal.name} label={"Ім'я"} />
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 bg-zinc-100 p-5 rounded w-full">
                <SellerLabel data={personal.surname} label={"Прізвище"} />
                <SellerLabel data={personal.additional} label={"По-батькові"} />
                <SellerLabel data={personal.sex} label={"Стать"} />
                <SellerLabel
                  data={personal.date_birth}
                  label={"День народження"}
                />
              </div>
              <div className="flex flex-col gap-2 w-full bg-zinc-100 p-5 rounded">
                <SellerLabel
                  data={personal.username}
                  label={"Електронна пошта"}
                />
                <SellerLabel data={contacts.phone} label={"Номер телефону"} />
                <SellerLabel data={contacts.viber} label={"Viber"} />
                <SellerLabel data={contacts.telegram} label={"Telegram"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AdditionalInfo;
