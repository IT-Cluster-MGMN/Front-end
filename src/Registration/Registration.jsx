import React, { useState, useEffect, useRef } from 'react';
import "./Registration.css";

// export default Registration;
function namesValidation(name){
    return /[a-zA-Zа-яА-Я]{3,20}$/.test(name)
}

function emailValidation(email){
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
}

function passwordValidation(password){
    return /^[a-zA-Z0-9-]{8,20}$/.test(password)
}

function phoneNumberValidation(phoneNumber){
    return /^\+\d{1,3}\d{9}$/.test(phoneNumber)
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

    useEffect(() => {
        const isValid = namesValidation(name);
        console.log(isValid);
        setValidName(isValid);
    }, [name]);

    useEffect(() => {
        const isValid = namesValidation(surname);
        console.log(isValid);
        setValidSurname(isValid);
    }, [surname]);

    useEffect(() => {
        const isValid = patronymic==='' || namesValidation(patronymic);
        console.log(isValid);
        setValidPatronymic(isValid);
    }, [patronymic]);

    useEffect(() => {
        const isValid = emailValidation(email);
        console.log(isValid);
        setValidEmail(isValid);
    }, [email]);

    useEffect(() => {
        const isValid = passwordValidation(password);
        console.log(isValid);
        setValidPassword(isValid);
    }, [password]);

    useEffect(() => {
        const isValid = phoneNumberValidation(phoneNumber);
        console.log(isValid)
        setValidPhoneNumber(isValid)
    }, [phoneNumber])

    useEffect(() => {
        setErrMsg('');
    }, [name, surname, patronymic, email, password, phoneNumber])

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validName && validSurname && validEmail && validPhoneNumber && validPatronymic && validPassword) {
            console.log("Успіх")
            setSuccess(true);
        } else {
            setErrMsg('Please fill in all required fields correctly.');
        }
    };

    return (
        <div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="row">
                    {nameFocus && !validName && <div className="error">Name must contain only letters and have less than 20 symbols</div>}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                        ref={nameRef}
                    />
                </div>
                <div className="row">
                    {surnameFocus && !validSurname && <div className="error">Surname must contain only letters and have less than 20 symbols</div>}
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        onFocus={() => setSurnameFocus(true)}
                        onBlur={() => setSurnameFocus(false)}
                    />
                </div>

                <div className="row">
                    <input
                        type="text"
                        id="patronymic"
                        name="patronymic"
                        placeholder="Patronymic"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                        onFocus={() => setPatronymicFocus(true)}
                        onBlur={() => setPatronymicFocus(false)}
                    />
                    {patronymicFocus && !validPatronymic && <div className="error">Please enter a valid patronymic.</div>}
                </div>

                <div className="row">
                {emailFocus && !validEmail && <div className="error">Please enter a valid email.</div>}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                </div>

                <div className="row">
                    {passwordFocus && !validPassword && <div className="error">Please enter a valid password.</div>}
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                    />
                    <button
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? "Hide" : "Show"}
                    </button>
                </div>

                <div className="row">
                    {phoneNumberFocus && !validPhoneNumber && <div className="error">Please enter a valid phone number.</div>}
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onFocus={() => setPhoneNumberFocus(true)}
                        onBlur={() => setPhoneNumberFocus(false)}
                    />
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

            {errMsg && <div className="error">{errMsg}</div>}
            {success && <div className="success">Registration successful!</div>}
        </div>
    )
}

export default Registration;