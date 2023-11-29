import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef, useState, useEffect } from "react"
import "../styles/App.css";
import { FunctionComponent } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9-]{8,20}$/;

const API_ENDPOINT = ""

function isInputValid(value, regex){
    return regex.test(value);
};

const Login = () => {

    let navigate = useNavigate();

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
                    navigate("/");
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

    return (
        <div className="relative bg-white w-full h-[1240px]  text-left text-base text-white font-inder left-[200px]">
          <div className="absolute top-[212px] left-[451px] rounded-[60px] bg-gray w-[540px] h-[775px] bg-[#0C0C0D] opacity-90" />
          <div className="absolute top-[835px] left-[809px] inline-block w-[149px] h-6">
            <span>Немає акаунту?</span>
          </div>
          <div className="absolute top-[835px] left-[508px] inline-block w-[244px] h-[33px]">
            <span>Забули пароль?</span>
          </div>

    
          <div className="renctagles">
            <div
              className="absolute top-[747px] left-[508px] rounded-lg w-[425px] h-[65px]"
            >
                {/* пароль ввід */}
                {renderError(passwordFocus, !validPassword, 'Please enter a valid password.')}                    
                <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handleInputChange(e, setPassword, setValidPassword, setPasswordFocus, PASSWORD_REGEX)}
                />
            </div>
            <div
              className="absolute top-[620px] left-[508px] rounded-lg w-[425px] h-[65px] "
            >
                {/* емайл ввід */}
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
            <img
              className="absolute top-[440px] left-[508px] rounded-lg w-[425px] h-[65px] "
              alt=""
              src="/rectangle-5.svg"
            />
            <img
              className="absolute top-[891px] left-[626px] rounded-lg w-[201px] h-10 "
              alt=""
              src="/rectangle-4.svg"
            />
          </div>
    
          <div className="png">
            <img
              className="absolute top-[764px] left-[887px] w-8 h-8 object-cover"
              alt=""
              src="/eye.png"
            />
            {/* Показати сховати пароль */}
            <button  className="absolute top-[764px] left-[887px] w-8 h-8 object-cover" onClick={togglePasswordVisibility}>
                {passwordVisible ? "Hide" : "Show"}
            </button>
            <img
              className="absolute top-[451px] left-[558px] w-10 h-10 object-cover"
              alt=""
              src="/google.png"
            />
          </div>
    
          <div className="Login-and-register">
            <div className="absolute top-[587px] left-[508px] inline-block w-[244px] h-[33px]">
              {`Електрона пошта або телефон `}
            </div>
            <div className="absolute top-[714px] left-[508px] inline-block w-[70px] h-[33px]">
              <span>Пароль</span>
            </div>
          </div>  
    
        <div className="auth">
          <div className="absolute top-[541.5px] left-[449.5px] box-border w-[537px] font-inder h-px border-t-[1px] border-solid border-white" />
          <div className="absolute top-[459px] left-[598px] text-[20px] font-inder text-black inline-block w-[402px]">
            Увійти за допомогою Google
          </div>
          {/* Вхід кнопка */}
            <div className="absolute top-[901px] left-[694px] text-black">
                <button type="submit">Login</button>
            </div>
          </div>
    
          <div className="Profile_Logo">
            <div className="absolute top-[241px] left-[630px] rounded-[50%] bg-white shadow-[0px_4px_4px_#484848_inset] w-[188px] h-[167px]" />
            <img
              className="absolute top-[263px] left-[670px] w-[102px] h-[122px] object-cover"
              alt=""
              src="/profile.png"
            />
          </div>
          {/* Вивід помилки */}
          {errMsg && <div className="error">{errMsg}</div>}
        </div>
      );
}

export default Login;