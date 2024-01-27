// import { useEffect, useState } from "react";

const ResetPasswordPage = () => {
    // const [email, setEmail] = useState('');
    // const [emailSent, setEmailSent] = useState(false);
    // const [confirmationCode, setConfirmationCode] = useState('');

    // const [identityConfirmed, setIdentityConfirmed] = useState(false);
    // const [newPassword, setNewPassword] = useState('');
    // const [matchPassword, setMatchPassword] = useState('');

    // const [errMsg, setErrMsg] = useState('');

    // const handleEmailSubmit = () => {
    //     // TODO: send email to backend to check if it exists then send 
    //     setEmailSent(true);
    // };

    // const handleConfirmationCodeSubmit = () => {
    //     // TODO: send confirmation code to backend
    //     setIdentityConfirmed(true);
    // };
    return(
        <>
            {/* <div className="bg-darkgrey w-[20%] h-[30%]">
                {identityConfirmed ? (
                    <div className="flex flex-col w-full h-full">
                        <label>New password</label>
                        <input onChange={(e) => setNewPassword(e.target.value)}/>
                        <label>Confirm password</label>
                        <input onChange={(e) => setMatchPassword(e.target.value)}/>
                        <button>submit</button>
                    </div>
                ) : (emailSent ? (
                    <div className="flex flex-col w-full h-full">
                        <label>Input confirmation code for:</label>
                        <p>{email}</p>
                        <input onChange={(e) => setConfirmationCode(e.target.value)}/>
                        <button onClick={handleConfirmationCodeSubmit}>submit</button>
                    </div>
                ) : (
                    <div className="flex flex-col w-full h-full">
                        <label>Input email</label>
                        <input onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={handleEmailSubmit}>submit</button>
                    </div>
                ))
                }
            </div> */}
        </>
    );
};
export default ResetPasswordPage;