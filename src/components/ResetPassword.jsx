import { useState, useRef, useEffect } from "react";

import "../App.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const API_ENDPOINT = '';

function isInputValid(value, regex){
    return regex.test(value);
};

const ResetPassword = () => {

    const emailRef = useRef();
    
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const handleInputChange = (e, setValue, setValid, setFocus, regex) => {
        const value = e.target.value;
        setValue(value);
        setFocus(true);
        setValid(isInputValid(value, regex));
    };

    const renderError = (focus, notValid, message) => {
        if(focus && notValid){
            return <div className="error">{message}</div>
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validEmail && validPassword) {
            try{
                // const loginUser = {"username":email, "password":password}
                // axios.post(API_ENDPOINT, loginUser)
                // .push("/");
                // setSuccess(true);
                setErrMsg("Success")
            }
            catch(error){
                setErrMsg("Wrong email or password!")
            }
        } else {
            setErrMsg('Please fill in all required fields correctly.');
        }
    };

    return (
        <div>
            <form className="authentication-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="reset-password-hint">
                    <p>Please enter your email...WIP</p>                        
                    </div>
                </div>
                <div className="row">
                {renderError(emailFocus, !validEmail, 'Please enter a valid email.')}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail, setValidEmail, setEmailFocus, EMAIL_REGEX)}
                        ref={emailRef}
                    />
                </div>
                <div>
                    <button type="submit">ChangePasswordTest</button>
                </div>
            </form>
            {errMsg && <div className="error">{errMsg}</div>}
        </div>   
    );
};

export default ResetPassword