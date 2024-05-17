import { FaCircleInfo } from "react-icons/fa6";

const Hint = ({ type }) => {
  const hints = {
    email: "Електронна пошта має мати такий вигляд: 'example@email.com'.",
    password:
      "Пароль повинен складатися з 8-20 символів. Дозволяється використовувати великі та маленькі латинські літери та цифри.",
    name: "Поле повинно складатися з 2-20 символів. Дозволяється використовувати великі та маленькі букви кириличного алфавіту.",
    viber:
      "Add a Viber username starting with a letter, followed by 6 to 25 characters consisting of letters, numbers, or underscores.",
    telegram: "Нікнейм повинен мати вигляд: '@example'.",
    title:
      "Назва товару може містити букви латинського, кириличного алфавіту, цифри, та спеціальні символи:, . ' _ - & ()",
    description:
      "Product descriptions can include anything you want - letters, numbers, symbols",
  };

  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] text-white font-sans shadow-[2rem] backdrop-blur-[2px] z-10 gap-2 rounded p-2 w-[19rem] mt-12  flex flex-row">
      <div className="relative flex flex-row">
        <FaCircleInfo className=" justify-self-center w-[25%] self-center" />
        <span className="line-clamp-4 text-[0.8rem] font-semibold">
          {hints[type]}
        </span>
      </div>
    </div>
  );
};

export default Hint;
