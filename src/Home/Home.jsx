import { Link, Outlet } from "react-router-dom"


const Home = () => {
    return (
        <div className="absolute bg-white w-full h-[1240px] left-[0px] top-[0px] overflow-hidden text-left text-base text-black font-inter">
        <img
          className="absolute top-[110px] left-[548px] w-[730px] h-[288.56px] object-cover"
          alt=""
          src="/banner-online-order-1@2x.png"
        />
  
        <div className="absolute top-[43.5px] left-[256.5px] bg-black box-border w-px h-[1137px] border-r-[1px] border-solid border-black" />
        <img
          className="absolute top-[425px] left-[0px] w-[257px] h-0.5"
          alt=""
          src="/line-4.svg"
        />
  
        <div className="absolute top-[759px] left-[538px] w-[898px] h-[312px] text-sm font-inika">
          <img
            className="absolute top-[280.01px] left-[252px] w-[51.51px] h-[1.5px]"
            alt=""
            src="/line-1.svg"
          />
  
          <div className="absolute top-[271px] left-[254px] font-inter inline-block w-[267px] h-[35px] text-gray-100">
            <p className="m-0">2 295₴</p>
            <p className="m-0 text-red">1 999₴</p>
          </div>
  
          <div className="absolute top-[271px] left-[4px] font-inter inline-block w-[121px] h-[41px]">
            12 499₴
          </div>
  
          <div className="absolute top-[243px] left-[4px] inline-block font-inter w-[121px] h-5">
            Електросамокат
          </div>
          <div className="absolute top-[248px] left-[245px] inline-block font-inter w-[305px] h-[29px]">
            Перфоратор RZTK H 1200
          </div>
  
          <div className="absolute top-[235px] left-[673px] inline-block font-inter w-[225px] h-4">
            Мобільний телефон Apple iPhone 15 128GB Black
          </div>
  
          <b className="absolute top-[0px] left-[4px] text-base inline-block w-[282px] h-[23px]">
            {" "}
            Більше товарів для вибору
          </b>
  
  
          <img
            className="absolute top-[23px] left-[673px] w-[170.81px] h-[210px] object-cover"
            alt=""
            src="/-20231025-232945612-1@2x.png"
          />
          <img
            className="absolute top-[40px] left-[236px] w-[323px] h-52 object-cover"
            alt=""
            src="/-20231025-232802395-1@2x.png"
          />
  
          <img
            className="absolute top-[40px] left-[0px] w-[121px] h-[203px] object-cover"
            alt=""
            src="/-20231025-232156053-1@2x.png"
           /> 
  
  
          <div className="absolute top-[272px] left-[674px] font-inter inline-block w-[171px] h-[26px]">
            42 499₴
          </div>
        </div>
  
        <div className="absolute top-[396px] left-[550px] w-[369px] h-[346px] text-xs">
          <div className="absolute top-[259px] left-[0px] font-inter inline-block w-[109px] h-[45px]">
            Конденсаторний мікрофон Fifine A8
          </div>
  
          <div className="absolute top-[0px] left-[0px] inline-block w-[291px] h-12">
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-base font-inter">
              <b>Нещодавно переглянуті</b>
            </p>
          </div>
  
          <img
            className="absolute top-[56px] left-[83px] w-[22px] h-[22px] object-cover"
            alt=""
            src="/-20231025-214400922-1@2x.png"
          />
  
          <div className="absolute top-[254px] left-[230px] font-inter flex items-center w-[104px] h-[42px]">
            Двохкамерний холодильник Samsung
          </div>
  
          <img
            className="absolute top-[48px] left-[230px] w-[104px] h-[203px] object-cover"
            alt=""
            src="/-20231025-211631618-2@2x.png"
          />
  
          <img
            className="absolute top-[48px] left-[5px] w-[104px] h-[203px] object-cover"
            alt=""
            src="/-20231025-205643089-1@2x.png"
          />
  
          <div className="absolute top-[319.5px] left-[0.5px] box-border w-[49px] h-px border-t-[1px] border-solid border-black" />
          <div className="absolute top-[311px] left-[1px] text-sm inline-block w-[104px] h-[35px] text-gray-100">
            <p className="m-0">3 499₴</p>
            <p className="m-0 text-red">2 749₴</p>
          </div>
  
          <div className="absolute top-[311px] left-[227px] text-sm inline-block w-[103px] h-[18px]">
            <span>23 229</span>
            <span className="font-inika">₴</span>
          </div>
        </div>
  
        <div className="absolute top-[500px] left-[5px] w-72 h-[410px] text-gray-200">
          <img
            className="absolute top-[260px] left-[0px] w-8 h-8 object-cover"
            alt=""
            src="/-20231026-120835655-1@2x.png"
          />
  
          <div className="absolute top-[260px] left-[35px] inline-block w-[253px] h-[150px]">
            <p className="m-0 text-black">
              <b>Повернення</b>
            </p>
            <p className="m-0">{`Повернення товару відбувається протягом 14 `}</p>
            <p className="m-0">
              днів після покупки, у відповідності із діючим законом.
            </p>
          </div>
  
          <img
            className="absolute top-[130px] left-[5px] w-8 h-8 object-cover"
            alt=""
            src="/-20231026-120323936-1@2x.png"
          />
  
          <img
            className="absolute top-[0px] left-[5px] w-8 h-8 object-cover"
            alt=""
            src="/-20231026-115637964-1@2x.png"
          />
  
          <div className="absolute top-[0px] left-[35px] inline-block w-[217px] h-[84px] text-black">
            <p className="m-0">
              <b> Гарантія</b>
            </p>
            <p className="m-0 text-gray-200">
              <span>
                <span> Сертифікована техніка з</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span> офіційною гарантією від</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span> виробника</span>
                <span className="text-black">.</span>
              </span>
            </p>
          </div>
  
          <div className="absolute top-[130px] left-[37px] text-sm inline-block w-[215px] h-[70px]">
            <p className="m-0 text-black">
              <b>Оплата</b>
            </p>
            <p className="m-0">Оплатити покупку можливо</p>
            <p className="m-0">готівкою, картою чи</p>
            <p className="m-0">безготівковим розрахунком.</p>
          </div>
        </div>
  
        <div className="absolute top-[110px] left-[19px] w-[303px] h-[311px] text-sm">
          <div className="absolute top-[0px] left-[23px] inline-block w-[280px] h-6">
                    Смартфони та телефони
                  </div>
                  <div className="absolute top-[105px] left-[23px] inline-block w-[177px] h-[19px]">
                    Інструменти і автотовари
                  </div>
                  <div className="absolute top-[35px] left-[23px] inline-block w-[193px] h-[17px]">
                    Телевізори та мультимедіа
                  </div>
                  <div className="absolute top-[70px] left-[23px] inline-block w-[193px] h-[23px]">
                    Ноутбуки та комп’ютери
                  </div>
                  <div className="absolute top-[140px] left-[23px] inline-block w-44 h-[34px]">
                    Одяг та взуття
                  </div>
                  <div className="absolute top-[174px] left-[22px] inline-block w-[133px] h-[23px]">
                    <p className="m-0">Дитячі товари</p>
                  </div>
                  <div className="absolute top-[209px] left-[23px] inline-block w-[120px] h-[23px]">
                    Зоотовари
                  </div>
                  <div className="absolute top-[245px] left-[25px] inline-block w-[149px] h-[23px]">
                    Спортивне знаряддя
                  </div>
                  <div className="absolute top-[280px] left-[23px] inline-block w-[159px] h-[31px]">
                    Дача, дім та сад
                  </div>
                  <img
                    className="absolute top-[140px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-230322858-1@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-224420283-1@2x.png"
                  />
                  <img
                    className="absolute top-[70px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-225520381-1@2x.png"
                  />
                  <img
                    className="absolute top-[105px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-230041995-1@2x.png"
                  />
                  <img
                    className="absolute top-[35px] left-[0px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-224804482-1@2x.png"
                  />
                  <img
                    className="absolute top-[174px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-230614034-1@2x.png"
                  />
                  <img
                    className="absolute top-[209px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-230738044-1@2x.png"
                  />
                  <img
                    className="absolute top-[279px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-231226937-1@2x.png"
                  />
                  <img
                    className="absolute top-[245px] left-[1px] w-5 h-5 object-cover"
                    alt=""
                    src="/-20231025-230934290-1@2x.png"
                  />
                </div>
  
                <div className="absolute top-[1180px] left-[0px] bg-gray-400 w-[100vw] h-[60px] overflow-hidden text-white">
                      <img
                      className="absolute top-[14px] left-[1400px] w-8 h-8 object-cover"
                      alt=""
                      src="/-20231026-102450223-1@2x.png"
                      /> 
                    <img
                    className="absolute top-[14px] left-[1460px] w-8 h-8 object-cover"
                    alt=""
                    src="/-20231026-102600741-1@2x.png"
                    />
                  <div className="absolute top-[16px] left-[1218px] inline-block w-[147px] h-7">
                    Зв’язатись з нами
                  </div>
                </div>
  
  
                {/* <span>Ось код знизу для navbarу</span> */}
                <div className="absolute top-[-1px] left-[-1px] bg-gray-400 box-border w-[100vw] h-[45px] overflow-hidden text-white border-[1px] border-solid border-gray-300">
                  <div className="absolute top-[calc(50%_-_6.5px)] left-[120px] text-[13px] inline-block w-[55px] h-[22px]">
                    Каталог
                  </div>
                  <div className="absolute top-[8px] left-[257px] bg-white w-[725px] h-7 overflow-hidden text-xs text-black">
                  <div
                    className="absolute top-[5px] left-[44px] inline-block w-[242px] h-[19px] bg-white border-none outline-none hover:no-underline focus:no-underline"
                    contentEditable="true" // ось це і дає можливість писати в пошуку//
                    placeholder="Пошук..."
                  />
                  </div>
                  <img
                    className="absolute top-[8px] left-[257px] w-10 h-7 object-cover"
                    alt=""
                    src="/-20231025-201645904-1@2x.png"
                  />
  
                  <div className="absolute top-[15px] left-[18px] text-sm inline-block w-[97px] h-[25px]">{`Головна `}</div>
                  <img
                    className="absolute top-[6px] right-[490px] w-8 h-8 object-cover"
                    alt=""
                    src="/-20231025-233332040-1@2x.png"
                  />
                  <img
                    className="absolute top-[6px] right-[150px] w-8 h-8 object-cover" // профіль//
                    alt=""
                    src="/-20231025-233542519-1@2x.png"
                  />
  
                  <div className="absolute top-[12px] right-[590px] font-inika inline-block w-[53px] h-5">
                    Кошик
                  </div>
                  <img
                    className="absolute top-[6px] right-[320px] w-8 h-8 object-cover" // Це обране//
                    alt=""
                    src="/-20231026-100100373-1@2x.png"
                  />
  
                  <div className="absolute top-[12px] right-[250px] font-inika inline-block w-[62px] h-5">
                    Обране
                  </div>
                  <Link
                  to="http://localhost:3001" // ну це перехід на іншу сторінку//
                  className="absolute top-[12px] right-[80px] font-inika inline-block w-[65px] h-5 text-white no-underline"
                  >
                  Профіль
                  </Link>
                  <div className="absolute top-[12px] right-[420px] font-inika inline-block w-[66px] h-5">
                    Продаж
                  </div>
                  <img
                    className="absolute top-[6px] right-[660px] w-8 h-8 object-cover"
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className="absolute top-[2px] left-[174px] w-10 h-10" />
                </div>
              </div>
            );
          };

export default Home