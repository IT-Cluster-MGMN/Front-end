import { FunctionComponent } from "react";

const Regestration: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1240px]  text-left text-base text-white font-inder left-[200px]">
      <div className="absolute top-[255px] left-[449px] rounded-[60px] bg-gray w-[539px] h-[735px] bg-[#0C0C0D] opacity-90" />
      <div className="rectangles">
      <img
        className="absolute top-[544px] left-[508px] rounded-lg w-[425px] h-[65px]"
        alt=""
        src="/rectangle-8(reg).svg"
      />
      <img
        className="absolute top-[667px] left-[507px] rounded-lg w-[425px] h-[65px]"
        alt=""
        src="/rectangle-8(reg).svg"
      />
      <img
        className="absolute top-[317px] left-[507px] rounded-lg w-[425px] h-[65px]"
        alt=""
        src="/rectangle-8(reg).svg"
      />
      <img
        className="absolute top-[891px] left-[626px] rounded-lg w-[201px] h-10"
        alt=""
        src="/rectangle-4(reg).svg"
      />
      <img
        className="absolute top-[780px] left-[507px] rounded-lg w-[425px] h-[65px]"
        alt=""
        src="/rectangle-8(reg).svg"
      />
      <img
        className="absolute top-[780px] left-[507px] rounded-lg w-[425px] h-[65px]"
        alt=""
        src="/rectangle-8(reg).svg"
      />
      <img
        className="absolute top-[427px] left-[508px] rounded-lg w-[425px] h-[65px]"
        alt=""
        src="/rectangle-8(reg).svg"
      />
      <img
        className="absolute top-[628.5px] left-[445px] w-[550px] h-[2px]"
        alt=""
        src="/line-1(reg).svg"
      />
      </div>

      <div className="png">
      <img
        className="absolute top-[797px] left-[887px] w-8 h-8 object-cover"
        alt=""
        src="/eye.png"
      /> 
      </div>

      <div className="Reg_data">
        <div className="absolute top-[901px] left-[694px] text-black">Увійти</div>
        <div className="absolute top-[634px] left-[507px] inline-block w-[244px] h-[33px]">{`Електрона пошта  `}
        <div className="absolute top-[764px] left-[887px] w-8 h-8" />
        <div className="absolute top-[401px] left-[556px] w-10 h-10" />
        </div>
        
      <div className="data">
        <div className="absolute top-[746px] left-[507px] inline-block w-[70px] h-[33px]">
          <span>Пароль</span>
        </div>
        <div className="absolute top-[288px] left-[508px] inline-block w-[181px] h-7">
          <span>Ім’я</span>
        </div>
        <div className="absolute top-[396px] left-[508px] inline-block w-[104px] h-[25px]">
          <span>Прізвище</span>
        </div>
        <div className="absolute top-[510px] left-[508px] inline-block w-[223px] h-[29px]">
          <span>Номер телефону</span>
        </div>
        
      </div>  
    </div>
  </div>  
  );
};

export default Regestration;
