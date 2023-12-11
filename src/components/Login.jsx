import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef, useState, useEffect, useContext } from 'react';
import "../styles/Login.css";
import AuthContext from "../fuctions/auth.jsx";
import { FunctionComponent } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;

const API_ENDPOINT = ""

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
              <section>
                  <h1>You are logged in!</h1>
                  <br />
                  <p>
                      <a href="#">Go to Home</a>
                  </p>
              </section>
          ) : (
              <section>
                  <label className='absolute top-[201px] left-[885px] rounded-[50%] bg-white shadow-[0px_4px_4px_#484848_inset] w-[160px] h-[140px]' />
                  <img 
                      className='absolute top-[233px] left-[915px] w-[100px] h-[120px] object-cover'
                      alt = 'prfile_logo'
                      src = 'profile.png'
                  />
                  <label className="auth">
                      <div className="absolute top-[441.5px] left-[710.5px] box-border w-[537px] font-inder h-px border-t-[1px] border-solid border-white" />
                          <div className="absolute top-[390px] left-[750px] text-[20px] font-inder text-black inline-block w-[425px] flex items-center justify-center  ">
                              <button className='button'> 
                                  <img 
                                      className='icon'
                                      alt = 'google_logo'
                                      src = 'google.png'
                                  />    
                                  Увійти за допомогою Google
                              </button>                            
                          </div>
                  </label>    

                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  {/* <h1 className='font-inika text-white'>Sign In</h1> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">  
                      <label className='font-inder text-white' htmlFor="username">Електрона пошта або телефон:</label>
                      <input
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                          required
                      />

                      <label className='font-inder text-white' htmlFor="password">Пароль:</label>
                      <input
                          type="password"
                          id="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                      />
                    </div>
                      <button className='button1'>Увійти</button>
                  </form>
                  <p className="sign2">
                      Забули пароль?<br />
                      <span className="line">
                          {/* router link here*/}
                          <a className= 'sign' href="#">Немає аккаунту?</a>
                      </span>
                  </p>
              </section>
          )}
      </>
      
  )
}

export default Login;
// const Login = () => {

//     let navigate = useNavigate();

//     const emailRef = useRef();
//     const errRef = useRef();

//     const [email, setEmail] = useState('');
//     const [validEmail, setValidEmail] = useState(false);
//     const [emailFocus, setEmailFocus] = useState(false);

//     const [password, setPassword] = useState('');
//     const [validPassword, setValidPassword] = useState(false);
//     const [passwordFocus, setPasswordFocus] = useState(false)

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);
//     const [passwordVisible, setPasswordVisible] = useState(false);

//     useEffect(() => {
//         emailRef.current.focus()
//     }, [])

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const handleInputChange = (e, setValue, setValid, setFocus, regex) => {
//         const value = e.target.value;
//         setValue(value);
//         setFocus(true);
//         setValid(isInputValid(value, regex));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validEmail && validPassword) {
//             try{
//                 const loginUser = {"username":email, "password":password}
//                 axios.post(API_ENDPOINT, loginUser)
//                 .then((res) => {
//                     navigate("/");
//                 })
                
//                 setSuccess(true);
//             }
//             catch(error){
//                 setErrMsg("Wrong email or password!")
//             }
//         } else {
//             setErrMsg('Please fill in all required fields correctly.');
//         }
//     };

//     const renderError = (focus, notValid, message) => {
//         if(focus && notValid){
//             return <div className="error">{message}</div>
//         }
//         return null;
//     }

//     return (
//         <div className="relative bg-white w-full h-[1240px]  text-left text-base text-white font-inder left-[200px]">
//           <div className="absolute top-[212px] left-[451px] rounded-[60px] bg-gray w-[540px] h-[775px] bg-[#0C0C0D] opacity-90" />
//           <div className="absolute top-[835px] left-[809px] inline-block w-[149px] h-6">
//             <span>Немає акаунту?</span>
//           </div>
//           <div className="absolute top-[835px] left-[508px] inline-block w-[244px] h-[33px]">
//             <span>Забули пароль?</span>
//           </div>

    
//           <div className="renctagles">
//             <div
//               className="absolute top-[747px] left-[508px] rounded-lg w-[425px] h-[65px]"
//             >
//                 {/* пароль ввід */}
//                 {renderError(passwordFocus, !validPassword, 'Please enter a valid password.')}                    
//                 <input
//                     type={passwordVisible ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => handleInputChange(e, setPassword, setValidPassword, setPasswordFocus, PASSWORD_REGEX)}
//                 />
//             </div>
//             <div
//               className="absolute top-[620px] left-[508px] rounded-lg w-[425px] h-[65px] "
//             >
//                 {/* емайл ввід */}
//             {renderError(emailFocus, !validEmail, 'Please enter a valid email.')}
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => handleInputChange(e, setEmail, setValidEmail, setEmailFocus, EMAIL_REGEX)}
//                 ref={emailRef}
//             />
//             </div>
//             <img
//               className="absolute top-[440px] left-[508px] rounded-lg w-[425px] h-[65px] "
//               alt=""
//               src="/rectangle-5.svg"
//             />
//             <img
//               className="absolute top-[891px] left-[626px] rounded-lg w-[201px] h-10 "
//               alt=""
//               src="/rectangle-4.svg"
//             />
//           </div>
    
//           <div className="png">
//             <img
//               className="absolute top-[764px] left-[887px] w-8 h-8 object-cover"
//               alt=""
//               src="/eye.png"
//             />
//             {/* Показати сховати пароль */}
//             <button  className="absolute top-[764px] left-[887px] w-8 h-8 object-cover" onClick={togglePasswordVisibility}>
//                 {passwordVisible ? "Hide" : "Show"}
//             </button>
//             <img
//               className="absolute top-[451px] left-[558px] w-10 h-10 object-cover"
//               alt=""
//               src="/google.png"
//             />
//           </div>
    
//           <div className="Login-and-register">
//             <div className="button">
//               {`Електрона пошта або телефон `}
//             </div>
//             <div className="absolute top-[714px] left-[508px] inline-block w-[70px] h-[33px]">
//               <span>Пароль</span>
//             </div>
//           </div>  
    
//         <div className="auth">
//           <div className="absolute top-[541.5px] left-[449.5px] box-border w-[537px] font-inder h-px border-t-[1px] border-solid border-white" />
//           <div className="absolute top-[459px] left-[598px] text-[20px] font-inder text-black inline-block w-[402px]">
//             Увійти за допомогою Google
//           </div>
//           {/* Вхід кнопка */}
//             <div className="absolute top-[901px] left-[694px] text-black">
//                 <button type="submit">Login</button>
//             </div>
//           </div>
    
//           <div className="Profile_Logo">
//             <div className="absolute top-[241px] left-[630px] rounded-[50%] bg-white shadow-[0px_4px_4px_#484848_inset] w-[188px] h-[167px]" />
//             <img
//               className="absolute top-[263px] left-[670px] w-[102px] h-[122px] object-cover"
//               alt=""
//               src="/profile.png"
//             />
//           </div>
//           {/* Вивід помилки */}
//           {errMsg && <div className="error">{errMsg}</div>}
//         </div>
//       );
// }

// export default Login;