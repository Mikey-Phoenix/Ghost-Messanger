import React, {useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from'react-router-dom';
import { IoRadioButtonOffOutline, IoRadioButtonOnOutline, IoEyeOffOutline, IoEyeOutline, IoCloseOutline, IoCheckmarkOutline } from "react-icons/io5";
import { GoogleLogin } from "@react-oauth/google";
// import { primary, surfaceBg, surfaceBgHover, primaryText, accent, accentHover, main, mainHover, grey } from "../theme/themeVars";



function signUp() {
    
    const [typingPassword, setTypingPassword] = useState(false);
    const [isMoreThan8, setIsMoreThan8] = useState(false);
    const [containsUp, setContainsUp] = useState(false);
    const [containsLow, setContainsLow] = useState(false);
    const [containsNum, setContainsNum] = useState(false);
    const [containsSpecial, setContainsSpecial] = useState(false);
    const [containsSpace, setContainsSpace] = useState(true);
    const [readTerms, setReadTerms] = useState(false);
    const [forgotToCheckTerms, setForgotToCheckTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [otp, setOtp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const form = useRef<HTMLFormElement>(null);

    const navigate = useNavigate();


    useEffect(()=>{
        setTypingPassword(typingPassword);
        setIsMoreThan8(isMoreThan8);
        setShowPassword(showPassword);
    }, [typingPassword, isMoreThan8, showPassword]);

    function displayPasswordQualities() {
        if(typingPassword) return "pl-2 mt-2"
        return "hidden pl-2 mt-2"
    }
    

    function collectValue(value: string) {
        if(value.length >= 8) {
            setIsMoreThan8(true);
        } else {
            setIsMoreThan8(false);
        }
        if(value.includes(" ")) {
            setContainsSpace(true)
        } else {
            setContainsSpace(false);
        }
    }
    
    async function handleSignup(e: React.FormEvent) {
        e.preventDefault();

        if (!readTerms) {
            setForgotToCheckTerms(true);
            return;
        }

        const response = await fetch("http://localhost:5000/api/signup", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
            setOtp(true); // popup opens only now
        } else {
            alert(data.error);
        }
    }

    return (
        <>
            {otp ? (
                <OtpWindow email={email} />

            ):(
                 <main className={`absolute w-[90%] lg:w-[80%] h-[70vh] min-h-[600px] md:h-[90vh] p-4 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center bg-(--surface-bg) rounded-2xl md:rounded-4xl`}>
                     <section className={`relative w-full lg:w-[50%] h-[20%] md:h-[30%] lg:h-full rounded-2xl md:rounded-4xl bg-(--primary) overflow-hidden`}>
                        <div className='w-full h-full'>
                            <div className='w-full h-full bg-[url(/logo.webp)] bg-center bg-no-repeat bg-contain'></div>
                        </div>
                        <div className='absolute bottom-3 right-[50%] translate-x-1/2 w-[50%] h-5 mx-auto flex items-center space-x-2'>
                            <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                            <p className='w-[50%] border hover:border-2 cursor-pointer'></p>
                            <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                        </div>
                    </section>
                    <section className={`lg:w-[50%] h-[75%] md:h-[60%] lg:h-full p-2 md:p-10 flex items-center justify-center rounded-2xl md:rounded-4xl text-(--primary-text) overflow-y-scroll no-scrollbar`}>
                        <div className="w-full h-full mt-5 md:mt-0">
                            <h1 className='text-2xl'>Create an account</h1>
                            <p className={`mt-1 text-(--grey-400) text-xs md:text-base`}>Already have an account? <span className={`cursor-pointer text-(--main) hover:text-(--main-hover)`} onClick={()=> window.location.replace("/sign-in")}>Log in</span></p>
        
                            <form ref={form} action="" className='mt-5' onSubmit={handleSignup}>
        
                                <input type="email" className={`w-full mt-3 p-3 bg-(--surface-bg-hover) rounded-md text-(--primary-text) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(--main)`} value={email} placeholder='Enter an email address' onChange={(e) => setEmail(e.target.value)} required />
                                <span className='relative'>
                                    <input type={showPassword ? "text" : "password"} className={`w-full mt-3 p-3 bg-(--surface-bg-hover) rounded-md text-(--primary-text) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(--main)`} value={password} placeholder='Create a password' onChange={(e)=> {setTypingPassword(true), collectValue(e.target.value), setPassword(e.target.value)}} required />
                                    {showPassword ? (
                                        <IoEyeOffOutline className={`absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text) hover:text-(--main-hover) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={() => setShowPassword(false)}/>
                                    ):(
                                        <IoEyeOutline className={`absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text) hover:text-(--main-hover) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={() => setShowPassword(true)}/>
                                    )}
                                </span>
                                <div className={displayPasswordQualities()}>
                                    {isMoreThan8 ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must be at least 8 characters</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must be at least 8 characters</p>
                                    )}
                                    {!containsSpace ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Do not separate letters by space</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Do not separate letters by space</p>
                                    )}
                                </div>
                                <p className='relative mt-2 text-xs md:text-sm flex items-center' onClick={() => {setReadTerms(prev => !prev), setForgotToCheckTerms(false)}}>{readTerms ? <IoRadioButtonOnOutline className={`inline mr-2 cursor-pointer hover:text-(--accent-hover)`} /> : <IoRadioButtonOffOutline className={`inline mr-2 cursor-pointer hover:text-(--accent-hover)`} />} I agree to the <span className={`ml-1 text-(--accent) underline cursor-pointer hover:text-(--accent-hover)`}> terms & conditions</span>
                                {forgotToCheckTerms && <span className='absolute top-full text-red-500'>You must agree to the terms and conditions</span>}
                                </p>

                                <button type='submit' className={`w-full mt-5 md:mt-7 py-2 px-4 bg-(--main) text-white text-sm md:text-base rounded-md cursor-pointer`} >Create Account</button>
                                
                            </form>
        
                            <div className={`relative w-full mt-10 border-t border-(--surface-bg-hover)`}>
                                <p className={`absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 px-3 pb-1 bg-(--surface-bg) text-xs md:text-sm`}>Or register with</p>
                                <div className={`w-full mt-5 md:mt-7 `}>

                                    <GoogleLogin
                                        shape='rectangular'
                                        onSuccess={async (credentialResponse) => {
                                            try {
                                                const res = await fetch("http://localhost:5000/api/google", {
                                                    method: "POST",
                                                    credentials: "include",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ credential: credentialResponse.credential }),
                                                });
                                                const data = await res.json();

                                                if (res.ok) {
                                                    navigate("/messages");
                                                } else {
                                                    alert(data.error);
                                                }
                                            } catch {
                                                alert("Could not reach the server. Is it running?");
                                            }
                                        }}
                                        onError={() => alert("Google sign-in failed")}
                                    />
                                </div>
                            </div>
                        </div>
                    </section> 
                </main> 
            )}
        
        </>
    );
}
function hasNumber(str: string): boolean {
    return /[0-9]/.test(str);
}

function OtpWindow({ email }:{ email: string }) {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    const inputRef3 = useRef<HTMLInputElement>(null);

    // const [showOtp, setShowOtp] = useState(false);
    // const [digits, setDigits] = useState(["", "", "", ""]);
    // const boxes = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(()=>{
        setValue(value);
    }, [value])

    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(30);
    const [error, setError] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // your existing value, value1, value2, value3, refs, checkValue and backTick stay as they are

    useEffect(() => {
        if (seconds <= 0) return;
        const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
        return () => clearTimeout(timer);
    }, [seconds]);

    async function handleVerify(e: React.FormEvent) {
        e.preventDefault();
        const code = [value, value1, value2, value3].join("");

        if (code.length < 4) {
            setError("Please enter all 4 digits");
            return;
        }

        const response = await fetch("http://localhost:5000/api/verify-otp", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, code }),
        });
        const data = await response.json();

        if (response.ok) {
            navigate("/messages");
        } else {
            setError(data.error);
        }
    }

    async function handleResend() {
        if (seconds > 0) return;

        const response = await fetch("http://localhost:5000/api/resend-otp", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();

        if (response.ok) {
            setSeconds(30);
            setError("");
        } else {
            setError(data.error);
        }
    }


    function backTick(event: React.KeyboardEvent<HTMLInputElement>, value: string, index: number) {
        if (value === "") {
            if(event.key === "Backspace") {
                switch (index) {
                    case 0:
                        break;
                    case 1:
                        inputRef.current?.focus();
                        break;
                    case 2:
                        inputRef1.current?.focus();
                    break;
                    case 3:
                        inputRef2.current?.focus();
                        break;
                }
            }
        }
    }

    function checkValue(value: string, index: number) {
        if(!hasNumber(value)) {
            value = "";
        }
        if (value.length > 1) {
            value = value[0];
        }
        switch (index) {
            case 0:
                setValue(value);
                if(value !== "") {
                    inputRef1.current?.focus();
                }
                break;
            case 1:
                setValue1(value);
                if(value !== "") {
                    inputRef2.current?.focus();
                }
                break;
            case 2:
                setValue2(value);
                if(value !== "") {
                    inputRef3.current?.focus();
                }
            break;
            case 3:
                setValue3(value);
                break;
        }

        // console.log(value)
    }

    return (
        <main className={`absolute w-[70%] md:w-[50%] lg:w-[30%] lg:min-w-[400px] h-[70vh] md:min-h-[30vh] max-h-[300px] px-5 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center bg-(--surface-bg) rounded-2xl md:rounded-4xl text-white`}>
            <form onSubmit={handleVerify} className='w-full'>
                {/* your four inputs, with onInput changed to onChange and the ) typo fixed */}
                <div className='flex items-center justify-center space-x-2'>
                    <input ref={inputRef} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(--surface-bg-hover)] rounded-md text-lg md:text-2xl text-center font-bold text-(--primary-text) ring-2 ring-white focus:outline-0 focus:ring-2 focus:ring-(--main)`} value={value} onInput={(e) => checkValue(e.currentTarget.value, 0)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 0)}/>

                    <input ref={inputRef1} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(--surface-bg-hover)] rounded-md text-lg md:text-2xl text-center font-bold text-(--primary-text) ring-2 ring-white focus:outline-0 focus:ring-2 focus:ring-(--main)`} value={value1} onInput={(e) => checkValue(e.currentTarget.value, 1)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 1)}/>

                    <input ref={inputRef2} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(--surface-bg-hover)] rounded-md text-lg md:text-2xl text-center font-bold text-(--primary-text) ring-2 ring-white focus:outline-0 focus:ring-2 focus:ring-(--main)`} value={value2} onInput={(e) => checkValue(e.currentTarget.value, 2)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 2)}/>

                    <input ref={inputRef3} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(--surface-bg-hover)] rounded-md text-lg md:text-2xl text-center font-bold text-(--primary-text) ring-2 ring-white focus:outline-0 focus:ring-2 focus:ring-(--main)`} value={value3} onInput={(e) => checkValue(e.currentTarget.value, 3)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 3)}/>

                </div>

                {error && <p className="mt-3 text-xs md:text-sm text-red-400">{error}</p>}

                <p className={`mt-5 italic text-xs md:text-sm text-(--grey-400)`}>
                    {seconds > 0 ? (
                        <>
                            <p>Resend OTP in <span>{seconds}</span> seconds</p>
                            <p>Verification code may have been sent to your spam folder</p>
                        </>

                    ) : (
                        <span onClick={handleResend} className={`text-(--accent) cursor-pointer`}>Resend OTP?</span>
                    )}
                </p>

                <div className='flex items-center justify-center'>
                    <button
                        type="submit"
                        className={`w-full mx-auto mt-5 md:mt-7 py-2 px-4 bg-(--main) hover:bg-(--main-hover) text-white text-center text-sm md:text-base rounded-md cursor-pointer`}
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </main>
    )
}



export default signUp;