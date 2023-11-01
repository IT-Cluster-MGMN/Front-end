import { Link } from "react-router-dom"
import axios from "axios"
import { useRef, useState, useEffect } from "react"
import "./Login.css"

const Login = () => {

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

    useEffect(() => {
        const isValid = email != '';
        console.log(isValid)
        setValidEmail(isValid)
    }, [email])

    useEffect(() => {
        const isValid = password != '';
        console.log(isValid)
        setValidPassword(isValid)
    }, [password])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validEmail && validPassword) {
            if (true){
                setSuccess(true);
            }
            else{
                setErrMsg('Wrong email or password');
            }
        } else {
            setErrMsg('Please fill in all required fields correctly.');
        }
    };

    return(
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
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
                            ref={emailRef}
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
                <div className="registration-link">
                    <Link to={"http://localhost:5173/reg"}>Registration</Link>
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