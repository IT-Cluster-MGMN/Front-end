import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';

const NAMES_REGEX = /[a-zA-Zа-яА-Я]{3,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;
const PHONE_NUMBER_REGEX = /^\+\d{1,3}\d{9}$/;

const PROFILE_API = 'http://localhost:8000/api/account/create/personal';
const SECURITY_API = 'http://localhost:8000/api/security/register';

// tailwind frequently used values
const FONT_CLASS = "font-Inder, sans-serif"
const HINT_WIDTH = "w-[92.3%]"

const RegistrationPage = () => {

  const navigate = useNavigate();

    const emailRef = useRef();
    const errRef = useRef();

    // Mandatory fields
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    

    // Additional fields
    const [name, setName] = useState('null');
    const [validName, setValidName] = useState(false);

    const [surname, setSurname] = useState('null');
    const [validSurname, setValidSurname] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('null');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);

    
    // Functional fields
    const [errMsg, setErrMsg] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');

    const [success, setSuccess] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    //initial focus
    // useEffect(() => {
    //     emailRef.current.focus();
    // }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
      setValidName(NAMES_REGEX.test(name));
    }, [name])

    useEffect(() => {
      setValidSurname(NAMES_REGEX.test(surname));
    }, [surname]);

    useEffect(() => {
      setValidPhoneNumber(PHONE_NUMBER_REGEX.test(phoneNumber));
    }, [phoneNumber])

    useEffect(() => {
        setErrMsg('');
    }, [email, password, matchPassword])

 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const customRequest = axios.create(
        {withCredentials:true}
      )
      const v1 = EMAIL_REGEX.test(email);
      const v2 = PASSWORD_REGEX.test(password);
      if (!v1 || !v2) {
          setErrMsg("Invalid Entry");
          return;
      }
      try {
        const createSecurity = {'username':email, 'password':password};
          const createPersonal = {'username':email, 'name':name, 'surname':surname};
          customRequest.post(SECURITY_API, createSecurity)
          .then(()=>{
            customRequest.post(PROFILE_API, createPersonal)
            .then(() => {
              navigate('/');
            })
            .catch((error) => {
              console.log(error)
            })
          })
          .catch((error)=>{
            console.log(error);
          })
     // WIP
      } catch (err) {
          // if () {
          //     setErrMsg('No Server Response');
          // } else if (err.response?.status === 409) {
          //     setErrMsg('Username(email) Taken');
          // } else if (!validEmail){
          //     setEmailErrMsg('Invalid Username(email)');
          // } else {
          //     setErrMsg('Registration Failed')
          // }
          setErrMsg('error');
          errRef.current.focus();
      }
  };

    

    return (
        <>
          {success ? (
            // if success = 1
            <section className="section">
              <h1>Success!</h1>
              <p>
                <a href="#">Sign In</a>
              </p>
            </section>
          ) : (
            // if success = 0

            <section className="flex items-center justify-center min-h-screen">

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


                {!errMsg ? <></> :
                  <label
                    ref={errRef}
                    className={`text-red-500 w-40 inline-block bg-white text-center rounded-2xl border-white ${FONT_CLASS} `}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </label>}


                <label htmlFor="username" className={`${FONT_CLASS} flex flex-row items-center text-white mt-[20px] text-left`}>
                  {email && (
                    <>
                      {validEmail ? (
                        <FaCheck className="mr-[10px]" />
                      ) : (
                        <FaTimes className="mr-[10px]" />
                      )}
                    </>
                  )}
                  Email:
                </label>


                <input
                  type="text"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className={`${FONT_CLASS} text-base p-2 w-[90%] h-full rounded-md mt-[5px]`}
                />

                <p
                id="uidnote"
                className={(!emailFocus || validEmail) ? 'w-0 overflow-hidden text-transparent h-0 transition-transform delay-150 duration-300' :
                  `text-xs bg-black text-white ${FONT_CLASS} overflow-hidden rounded-md p-1 h-[3.5rem] relative 
                  transition-all delay-150 duration-300 ${HINT_WIDTH}`}
                >
                  <FaInfoCircle />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>
      
                <label htmlFor="password" className={`${FONT_CLASS} flex flex-row items-center text-white mt-[20px] text-left`}>                  
                  {password && (
                    <>
                      {validPassword ? (
                        <FaCheck className="mr-[10px]" />
                      ) : (
                        <FaTimes className="mr-[10px]" />
                      )}
                    </>
                  )}
                  Password:
                </label>

                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? 'false' : 'true'}
                  aria-describedby="pwdnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  className={`${FONT_CLASS} text-base p-2 w-[90%] rounded-md h-full mt-[5px]`}
                />

                <p
                  id="pwdnote"
                  className={(!passwordFocus || validPassword) ? 'w-0 overflow-hidden text-transparent h-0 transition-transform delay-150 duration-300' :
                  `text-xs bg-black text-white ${FONT_CLASS} overflow-hidden rounded-md p-1 h-[4.6rem] relative 
                  transition-all delay-150 duration-300 ${HINT_WIDTH}`}
                  >
                  <FaInfoCircle />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number, and a special character.
                  <br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> 
                  <span aria-label="hashtag">#</span> 
                  <span aria-label="dollar sign">$</span> 
                  <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd" className={`${FONT_CLASS} flex flex-row items-center text-white mt-[20px] text-left`}>                  
                  { matchPassword && (
                    <>
                      {validMatch ? (
                        <FaCheck className="mr-[10px]" />
                      ) : (
                        <FaTimes className="mr-[10px]" />
                      )}
                    </>
                  )}
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  value={matchPassword}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className={`${FONT_CLASS} text-base p-2 w-[90%] rounded-md h-full mt-[5px]`}
                />

                <p
                  id="confirmnote"
                  className={(!matchFocus || validMatch) ? 'w-0 overflow-hidden text-transparent h-0 transition-transform delay-150 duration-300' :
                  `text-xs bg-black text-white ${FONT_CLASS} overflow-hidden rounded-md p-1 h-[1.6rem] relative 
                  transition-all delay-150 duration-300 ${HINT_WIDTH}`}
                >
                  <FaInfoCircle />
                  Must match the first password input field.
                </p>
      
                {showAdditionalFields && (
                  <>
                    {/* Additional fields */}
                    <label htmlFor="name" className={`${FONT_CLASS} flex flex-row items-center text-white mt-[20px] text-left`}>
                    {name && (
                      <>
                        {validName ? (
                          <FaCheck className="mr-[10px]" />
                        ) : (
                          <FaTimes className="mr-[10px]" />
                        )}
                      </>
                    )}
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      className={`${FONT_CLASS} text-base p-2 w-[90%] rounded-md h-full mt-[5px]`}
                    />
      
                    <label htmlFor="surname" className={`${FONT_CLASS} flex flex-row items-center text-white mt-[20px] text-left`}>
                    {surname && (
                      <>
                        {validSurname ? (
                          <FaCheck className="mr-[10px]" />
                        ) : (
                          <FaTimes className="mr-[10px]" />
                        )}
                      </>
                    )}
                      Surname:
                    </label>
                    <input
                      type="text"
                      id="surname"
                      onChange={(e) => setSurname(e.target.value)}
                      value={surname}
                      required
                      className={`${FONT_CLASS} text-base p-2 w-[90%] rounded-md h-full mt-[5px]`}
                    />
      
                    <label htmlFor="phoneNumber" className={`${FONT_CLASS} flex flex-row items-center text-white mt-[20px] text-left`}>
                    {phoneNumber && (
                      <>
                        {validPhoneNumber ? (
                          <FaCheck className="mr-[10px]" />
                        ) : (
                          <FaTimes className="mr-[10px]" />
                        )}
                      </>
                    )}
                      Phone Number:

                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      required
                      className={`${FONT_CLASS} text-base p-2 w-[90%] rounded-md h-full mt-[5px]`}
                    />
                  </>
                )}
      
                <div className="w-[95%]">
                  <button
                    className={`${FONT_CLASS} text-[20px] text-black rounded-md h-full mt-[30px] p-2 w-full`}
                    disabled={validEmail && validPassword && validMatch ? false : true}
                  >
                    Sign Up
                  </button>
                </div>
      
                <p className="flex justify-between sign2 text-white mt-[50px] w-[90%]">
                    <Link className={`${FONT_CLASS} no-underline visited:text-white text-[15px]`} to="/login">Sign in</Link>
                    <button
                      className={`${FONT_CLASS} text-[15px] text-white bg-inherit border-none`}
                      onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                    >
                      {!showAdditionalFields ? "More" : "Hide"}
                    </button>
                </p>
              </form>
            </section>
          )}
        </>
      );
    }      
export default RegistrationPage;      
