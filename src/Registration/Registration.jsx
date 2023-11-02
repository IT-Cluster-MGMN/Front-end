import React, { useState, useEffect, useRef } from 'react';
import "./Registration.css";

const NAMES_REGEX = /[a-zA-Zа-яА-Я]{3,20}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;
const PHONE_NUMBER_REGEX = /^\+\d{1,3}\d{9}$/;

function isInputValid(value, regex, isOptional){
    if(value === '' && isOptional){
        return true;
    }
    else{
        return regex.test(value);
    }
}

const Registration = () => {

    const nameRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [surname, setSurname] = useState('');
    const [validSurname, setValidSurname] = useState(false);
    const [surnameFocus, setSurnameFocus] = useState(false);

    const [patronymic, setPatronymic] = useState('');
    const [validPatronymic, setValidPatronymic] = useState(true);
    const [patronymicFocus, setPatronymicFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleInputChange = (e, setValue, setValid, regex, setFocus, isOptional) => {
        const value = e.target.value;
        setValue(value);
        setFocus(true);
        setValid(isInputValid(value, regex, isOptional))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validName && validSurname && validEmail && validPhoneNumber && validPatronymic && validPassword) {
            console.log("Успіх")
            // frontend logic
            // post name
            setSuccess(true);
        } else {
            setErrMsg('Please fill in all required fields correctly.');
        }
    };

    const renderError = (focus, valid, message) => {
        if (focus && valid) {
          return <div className="error">{message}</div>;
        }
        return null;
    };

    return (
        <div>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="row">
              {renderError(nameFocus, !validName, 'Name must contain only letters and have less than 20 symbols')}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => handleInputChange(e, setName, setValidName, NAMES_REGEX, setNameFocus, false)}
                ref={nameRef}
              />
            </div>
            <div className="row">
              {renderError(surnameFocus, !validSurname, 'Surname must contain only letters and have less than 20 symbols')}
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
                value={surname}
                onChange={(e) => handleInputChange(e, setSurname, setValidSurname, NAMES_REGEX, setSurnameFocus, false)}
              />
            </div>
            <div className="row">
              <input
                type="text"
                id="patronymic"
                name="patronymic"
                placeholder="Patronymic"
                value={patronymic}
                onChange={(e) => handleInputChange(e, setPatronymic, setValidPatronymic, NAMES_REGEX, setPatronymicFocus, true)}
              />
              {renderError(patronymicFocus, !validPatronymic, 'Please enter a valid patronymic.')}
            </div>
            <div className="row">
              {renderError(emailFocus, !validEmail, 'Please enter a valid email.')}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail, setValidEmail, EMAIL_REGEX, setEmailFocus, false)}
              />
            </div>
            <div className="row">
              {renderError(passwordFocus, !validPassword, 'Please enter a valid password.')}
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword, setValidPassword, PASSWORD_REGEX, setPasswordFocus, false)}
              />
              <button className="password-toggle" onClick={togglePasswordVisibility}>
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="row">
              {renderError(phoneNumberFocus, !validPhoneNumber, 'Please enter a valid phone number.')}
              <input
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e, setPhoneNumber, setValidPhoneNumber, PHONE_NUMBER_REGEX, setPhoneNumberFocus, false)}
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
          {errMsg && <div className="error">{errMsg}</div>}
        </div>
      );
    };
    
    export default Registration;