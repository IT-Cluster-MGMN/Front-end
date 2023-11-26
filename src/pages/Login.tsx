import { FunctionComponent } from "react";

const Login: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1240px]  text-left text-base text-white font-inder left-[200px]">
      <div className="absolute top-[212px] left-[451px] rounded-[60px] bg-gray w-[540px] h-[775px] bg-[#0C0C0D] opacity-90" />
      <div className="absolute top-[835px] left-[809px] inline-block w-[149px] h-6">
        <span>Немає акаунту?</span>
      </div>
      <div className="absolute top-[835px] left-[508px] inline-block w-[244px] h-[33px]">
        <span>Забули пароль?</span>
      </div>
      <div className="absolute top-[714px] left-[508px] inline-block w-[70px] h-[33px]">
        <span>Пароль</span>
      </div>

      <div className="renctagles">
        <img
          className="absolute top-[747px] left-[508px] rounded-lg w-[425px] h-[65px]"
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className="absolute top-[620px] left-[508px] rounded-lg w-[425px] h-[65px] "
          alt=""
          src="/rectangle-3.svg"
        />
        <img
          className="absolute top-[440px] left-[508px] rounded-lg w-[425px] h-[65px] "
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className="absolute top-[891px] left-[626px] rounded-lg w-[201px] h-10 "
          alt=""
          src="/rectangle-4.svg"
        />
      </div>

      <div className="png">
        <img
          className="absolute top-[764px] left-[887px] w-8 h-8 object-cover"
          alt=""
          src="/eye.png"
        />
        <img
          className="absolute top-[451px] left-[558px] w-10 h-10 object-cover"
          alt=""
          src="/google.png"
        />
      </div>

      <div className="Login-and-register">
        <div className="absolute top-[587px] left-[508px] inline-block w-[244px] h-[33px]">
          {`Електрона пошта або телефон `}
        </div>
        <div className="absolute top-[714px] left-[508px] inline-block w-[70px] h-[33px]">
          <span>Пароль</span>
        </div>
      </div>  

    <div className="auth">
      <div className="absolute top-[541.5px] left-[449.5px] box-border w-[537px] font-inder h-px border-t-[1px] border-solid border-white" />
      <div className="absolute top-[459px] left-[598px] text-[20px] font-inder text-black inline-block w-[402px]">
        Увійти за допомогою Google
      </div>
        <div className="absolute top-[901px] left-[694px] text-black">
          <span>Увійти</span>
        </div>
      </div>

      <div className="Profile_Logo">
        <div className="absolute top-[241px] left-[630px] rounded-[50%] bg-white shadow-[0px_4px_4px_#484848_inset] w-[188px] h-[167px]" />
        <img
          className="absolute top-[263px] left-[670px] w-[102px] h-[122px] object-cover"
          alt=""
          src="/profile.png"
        />
      </div>
    </div>
  );
};

export default Login;
