import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef, useState, useEffect, useContext, createContext } from 'react';

// import { AuthContext } from '../functions/auth.jsx';
import { FunctionComponent } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;

const API_ENDPOINT = ""

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

function isInputValid(value, regex){
    return regex.test(value);
};

const Login = () => {

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

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser('');
          setPwd('');
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
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
            <section className="
            flex flex-col 

            ">
                <p ref={errRef} className={`text-red-500 ${errMsg ? 'errmsg' : 'offscreen'}`} aria-live="assertive">
                    {errMsg}
                </p>

                <form onSubmit={handleSubmit} className="
                flex flex-col 
                space-y-4 
                p-8 
                rounded-lg 
                shadow-md 
                mt-8 w-96">


                    {/* Картинка профілю */}
                    <div className="relative w-40 h-40">
                        <label1 className="
                        absolute flex 
                        items-center 
                        rounded-full 
                        justify-center
                        bg-white 
                        shadow-inset 
                        w-full h-full">
                            <img
                                className="
                                absolute top-2 left-2 
                                w-36 h-36 
                                object-cover 
                                rounded-full"
                                // потрібно додати функцію, яка буде посилати гет запит по введеному емейлу, щоб показувало
                                // картинку профілю
                                alt="profile_logo"
                                src="profile.png"
                            />
                        </label1>
                    </div>

                    {/* Google button */}
                    <button id="login" className="
                    button-google 
                    flex 
                    bg-white
                    w-full  
                    text-black
                    font-inder
                    rounded-md">
                        <img className="icon mr-2 ml-2 w-6 h-6" alt="google_logo" src="google.png" />
                        Увійти за допомогою Google
                    </button>

                        <label className="font-inder text-white" htmlFor="username">
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
                            className="input-field"
                        />

                        <label className="font-inder text-white" htmlFor="password">
                            Пароль:
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="input-field"
                        />
                    

                    <button className="
                    button-login 
                    flex 
                    items-center 
                   
                    bg-#ccc 
                    text-black 
                    rounded-md">
                        Увійти
                    </button>

                    <p className="sign2 text-white mt-4">
                        Забули пароль?<br />
                        <span className="line">
                            <Link to="/resetpassword">Немає акаунту?</Link>
                        </span>
                    </p>
                </form>
            </section>

            
          )}
      </>
      
  )
}

export default Login;
