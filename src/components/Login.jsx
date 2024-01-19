import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef, useState, useEffect, useContext, createContext } from 'react';
import Cookies from "js-cookie";

// import { AuthContext } from '../functions/auth.jsx';
import { FunctionComponent } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;

const API_ENDPOINT = "http://localhost:8000/api/security/login";

const AuthContext = createContext({});

const FONT_CLASS = "font-Inder, sans-serif"

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

const Login = () => {

    let navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = (e) => {
      e.preventDefault();

        const customRequest = axios.create({
            baseURL: API_ENDPOINT,
            headers: {'RequestOrigin': 'http://localhost:8000'},
            withCredentials:true
        })

      try {
          const toPost = {'username':user, 'password':pwd};
          customRequest.post(API_ENDPOINT, toPost)
          .then((res) => {
            console.log(res);
            // console.log(res.data.accessToken);
            // const accessToken = res.data.accessToken;
            // Cookies.set('accessToken', accessToken);
            navigate('/')
          })
      } catch (err) {
          setErrMsg('error WIP')
          errRef.current.focus();
      }
  }

  return (
      <>
          {success ? (
            // if success = 1
              <section>
                  <h1>You are logged in!</h1>
                  <br />
                  <p>
                      <a href="#">Go to Home</a>
                  </p>
              </section>
          ) : (
            // if success = 0
            <section className="flex items-center justify-center min-h-screen">

                {/* форма */}
                <form onSubmit={handleSubmit} className="
                flex flex-col
                w-full max-w-[420px] min-h-[400px] 
                justify-center 
                pt-10
                pb-10
                pl-4
                pr-4 
                items-center
                rounded-[2rem] 
                bg-darkgrey
                drop-shadow-xl">
                
                {/* помилки */}
                <p ref={errRef} className={`text-red-500 w-40 inline-block bg-white text-center rounded-2xl border-white ${errMsg ? 'errmsg' : 'offscreen'}`} aria-live="assertive">
                    {errMsg}
                </p>



                {/* Картинка профілю */}
                <div className="relative w-40 h-40">
                    <label className="absolute flex items-center justify-center w-full h-full bg-white rounded-full shadow-inset text-align-center">
                    <img className="absolute object-cover rounded-full top-2 left-2 w-36 h-36"
                        // потрібно додати функцію, яка буде посилати гет запит по введеному емейлу, щоб показувало
                        // картинку профілю
                        alt="profile_logo"
                        src="profile.png"
                    />
                    </label>
                </div>

                {/* Google button */}
                <button id="login" className={`
                ${FONT_CLASS}
                button-google 
                flex
                justify-evenly 
                bg-white 
                text-black
                text-[20px]
                rounded-md
                h-full
                p-2
                text-[20px]
                w-[94%]
                mt-[30px]`}>
                    <img className="w-6 icon" alt="google_logo" src="google.png" />
                    Увійти за допомогою Google
                </button>

                {/* Ел пошта  */}
                <label className={`${FONT_CLASS} text-white mt-[20px] text-left`} htmlFor="username">
                    Електрона пошта або телефон:
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className={`${FONT_CLASS} text-base p-2 w-[90%] h-full rounded-md mt-[5px]`}
                />


                {/* Пароль */}
                <label className={`${FONT_CLASS} text-white mt-[20px] text-left`} htmlFor="password">
                    Пароль:
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    className={`${FONT_CLASS} text-base p-2 w-[90%] rounded-md h-full mt-[5px]`}
                />
                    

                {/* Кнопка входу */}
                <button id="login" className={`
                ${FONT_CLASS}
                text-[20px]
                text-black 
                rounded-md
                h-full
                mt-[30px]
                p-2
                w-[94%]`}>
                    Увійти
                </button>


                {/* ссилки на інші сторінки */}
                <p className="flex justify-between sign2 text-white mt-[50px] w-[90%]">
                    <Link className={`${FONT_CLASS} text-white no-underline visited:text-white`} to="/resetpassword">Забули пароль?</Link>
                    <Link className={`${FONT_CLASS} text-white no-underline visited:text-white`}  to="/registration">Немає акаунту?</Link>
                </p>
                </form>
            </section>

            
          )}
      </>
      
  )
}

export default Login;
