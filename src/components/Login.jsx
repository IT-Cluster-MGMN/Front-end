import { Link } from "react-router-dom"
import axios from "axios"
import { useRef, useState, useEffect } from "react"
import "../App.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;

const API_ENDPOINT = ""

function isInputValid(value, regex){
    return regex.test(value);
};

const Login = () => {

    let home = useHome();

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleInputChange = (e, setValue, setValid, setFocus, regex) => {
        const value = e.target.value;
        setValue(value);
        setFocus(true);
        setValid(isInputValid(value, regex));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validEmail && validPassword) {
            try{
                const loginUser = {"username":email, "password":password}
                axios.post(API_ENDPOINT, loginUser)
                .then((res) => {
                    home.push("/");
                })
                
                setSuccess(true);
            }
            catch(error){
                setErrMsg("Wrong email or password!")
            }
        } else {
            setErrMsg('Please fill in all required fields correctly.');
        }
    };

    const renderError = (focus, notValid, message) => {
        if(focus && notValid){
            return <div className="error">{message}</div>
        }
        return null;
    }

    return(
        <div>
            <form className="authentication-form" onSubmit={handleSubmit}>
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
                <div className="row">
                    {renderError(passwordFocus, !validPassword, 'Please enter a valid password.')}                    
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => handleInputChange(e, setPassword, setValidPassword, setPasswordFocus, PASSWORD_REGEX)}
                        />
                        <button
                            className="password-toggle"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? "Hide" : "Show"}
                        </button>
                </div>
                <div className="registration-link">
                    <Link to={"/registration"}>Registration</Link>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            {errMsg && <div className="error">{errMsg}</div>}
        </div>
    )
}

export default Login;