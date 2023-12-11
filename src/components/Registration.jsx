import React, { useState, useEffect, useRef } from 'react';
import "../styles/Registration.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';

const NAMES_REGEX = /[a-zA-Zа-яА-Я]{3,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;
const PHONE_NUMBER_REGEX = /^\+\d{1,3}\d{9}$/;

const API_ENDPOINT = 'http://localhost:8088/api/register';

function isInputValid(value, regex, isOptional){
    if(value === '' && isOptional){
        return true;
    }
    else{
        return regex.test(value);
    }
}

const Registration = () => {

    let navigate = useNavigate();

    const emailRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [surname, setSurname] = useState('');
    const [validSurname, setValidSurname] = useState(false);
    const [surnameFocus, setSurnameFocus] = useState(false);

    // const [patronymic, setPatronymic] = useState('');
    // const [validPatronymic, setValidPatronymic] = useState(true);
    // const [patronymicFocus, setPatronymicFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [emailErrMsg, setEmailErrMsg] = useState('');

    const [success, setSuccess] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [email, password, matchPassword])

    // const togglePasswordVisibility = () => {
    //     setPasswordVisible(!passwordVisible);
    // };

    // const handleInputChange = (e, setValue, setValid, regex, setFocus, isOptional) => {
    //     const value = e.target.value;
    //     setValue(value);
    //     setFocus(true);
    //     setValid(isInputValid(value, regex, isOptional))
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validName && validSurname && validEmail && validPhoneNumber && validPatronymic && validPassword) {
    //       try{
    //         const createUser = {'name': name, 'surname': surname, 'number': phoneNumber,
    //         'username': email, 'password':password};
    //         axios.post(API_ENDPOINT, createUser)
    //         .then((res) => {
    //           navigate("/login");
    //         })
    //         // .catch((error) => {

    //         // })
    //         setSuccess(true);
    //       } catch (error){
    //         setErrMsg('An error occured while registering. Please try later.')
    //       }
    //     } else {
    //         setErrMsg('Please fill in all required fields correctly.');
    //     }
    // };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = EMAIL_REGEX.test(email);
      const v2 = PASSWORD_REGEX.test(password);
      if (!v1 || !v2) {
          setErrMsg("Invalid Entry");
          return;
      }
      try {
          const response = await axios.post(
              REGISTER_URL,
              JSON.stringify({ email, password }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(response?.data);
          console.log(response?.accessToken);
          console.log(JSON.stringify(response))
          console.log("Name:", name);
          console.log("Surname:", surname);
          console.log("Phone Number:", phoneNumber);
          setSuccess(true);
          setEmail('');
          setPassword('');
          setMatchPassword('');
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Username(email) Taken');
          } else if (!validName){
              setEmailErrMsg('Invalid Username(email)');
          } else {
              setErrMsg('Registration Failed')
          }
          errRef.current.focus();
      }
  };

    // const renderError = (focus, valid, message) => {
    //     if (focus && valid) {
    //       return <div className="error">{message}</div>;
    //     }
    //     return null;
    // };

    // return (
    //     <div>
    //       <form className="authentication-form" onSubmit={handleSubmit}>
    //         <div className="row">
    //           {renderError(nameFocus, !validName, 'Name must contain only letters and have less than 20 symbols')}
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             placeholder="Name"
    //             value={name}
    //             onChange={(e) => handleInputChange(e, setName, setValidName, NAMES_REGEX, setNameFocus, false)}
    //             ref={nameRef}
    //           />
    //         </div>
    //         <div className="row">
    //           {renderError(surnameFocus, !validSurname, 'Surname must contain only letters and have less than 20 symbols')}
    //           <input
    //             type="text"
    //             id="surname"
    //             name="surname"
    //             placeholder="Surname"
    //             value={surname}
    //             onChange={(e) => handleInputChange(e, setSurname, setValidSurname, NAMES_REGEX, setSurnameFocus, false)}
    //           />
    //         </div>
    //         <div className="row">
    //           {renderError(emailFocus, !validEmail, 'Please enter a valid email.')}
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => handleInputChange(e, setEmail, setValidEmail, EMAIL_REGEX, setEmailFocus, false)}
    //           />
    //         </div>
    //         <div className="row">
    //           {renderError(passwordFocus, !validPassword, 'Please enter a valid password.')}
    //           <input
    //             type={passwordVisible ? 'text' : 'password'}
    //             id="password"
    //             name="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => handleInputChange(e, setPassword, setValidPassword, PASSWORD_REGEX, setPasswordFocus, false)}
    //           />
    //           <button className="password-toggle" onClick={togglePasswordVisibility}>
    //             {passwordVisible ? 'Hide' : 'Show'}
    //           </button>
    //         </div>
    //         <div className="row">
    //           {renderError(phoneNumberFocus, !validPhoneNumber, 'Please enter a valid phone number.')}
    //           <input
    //             type="text"
    //             id="phoneNumber"
    //             placeholder="Phone Number"
    //             name="phoneNumber"
    //             value={phoneNumber}
    //             onChange={(e) => handleInputChange(e, setPhoneNumber, setValidPhoneNumber, PHONE_NUMBER_REGEX, setPhoneNumberFocus, false)}
    //           />
    //         </div>
    //         <div>
    //           <button type="submit">Register</button>
    //         </div>
    //       </form>
    //     </div>
    //   );


    return (
        <>
          {success ? (
            <section className="section">
              <h1>Success!</h1>
              <p>
                <a href="#">Sign In</a>
              </p>
            </section>
          ) : (
            <section>
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <p
                ref={errRef}
                className={
                  emailFocus && email && !validEmail ? 'errmsg' : 'offscreen'
                }
                aria-live="assertive"
              >
                {emailErrMsg}
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="labelWithIcon">
                  Username:
                  {email && (
                    <>
                      {validEmail ? (
                        <FaCheck className="valid-icon" />
                      ) : (
                        <FaTimes className="invalid-icon" />
                      )}
                    </>
                  )}
                </label>
                <input
                  type="text"
                  id="username"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    emailFocus && email && !validEmail
                      ? 'instructions bg-[#606060]'
                      : 'offscreen'
                  }
                >
                  <FaInfoCircle />
                  <p className="font-inder text white">
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </p>
      
                <label htmlFor="password" className="labelWithIcon">
                  Password:
                  {passwordFocus && password && (
                    <>
                      {validPassword ? (
                        <FaCheck className="valid-icon" />
                      ) : (
                        <FaTimes className="invalid-icon" />
                      )}
                    </>
                  )}
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
                />
                <p
                  id="pwdnote"
                  className={
                    passwordFocus && password
                      ? 'instructions instructions bg-[#606060]'
                      : 'offscreen'
                  }
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
      
                <label htmlFor="confirm_pwd" className="labelWithIcon">
                  Confirm Password:
                  {matchFocus && matchPassword && (
                    <>
                      {validMatch ? (
                        <FaCheck className="valid-icon" />
                      ) : (
                        <FaTimes className="invalid-icon" />
                      )}
                    </>
                  )}
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
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch
                      ? 'instructions instructions bg-[#606060]'
                      : 'offscreen'
                  }
                >
                  <FaInfoCircle />
                  Must match the first password input field.
                </p>  
      
                {showAdditionalFields && (
                  <>
                    {/* Additional fields */}
                    <label htmlFor="name" className="labelWithIcon">
                      Name:
                      {/* Validation icons here */}
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
      
                    <label htmlFor="surname" className="labelWithIcon">
                      Surname:
                      {/* Validation icons here */}
                    </label>
                    <input
                      type="text"
                      id="surname"
                      onChange={(e) => setSurname(e.target.value)}
                      value={surname}
                      required
                    />
      
                    <label htmlFor="phoneNumber" className="labelWithIcon">
                      Phone Number:
                      {/* Validation icons here */}
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      required
                      style={{ width: "420px", height: "40px", borderRadius: "8px" }}
                    />
                  </>
                )}
      
                <div className="buttons-container">
                  <button
                    className="relative w-40 h-8 text-base mt-5 font-Inder rounded-full bg-white p-2 ml-32 text-center flex items-center justify-center text-black"
                    disabled={!validName || !validPassword || !validMatch ? true : false}
                  >
                    Sign Up
                  </button>

                  <button
                    className="button3"
                    onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                  >
                    More
                  </button>
        
                </div>
      
                <p className="sign1">
                  Already registered?<br />
                  <span className="line">
                    <a className='sign2' href="#">
                      Sign In
                      </a>
                  </span>
                </p>
              </form>
            </section>
          )}
        </>
      );
    }      
export default Registration;      