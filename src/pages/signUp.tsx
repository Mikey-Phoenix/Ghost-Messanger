import React, {useState, useEffect, useRef} from 'react';
import { IoRadioButtonOffOutline, IoRadioButtonOnOutline, IoEyeOffOutline, IoEyeOutline, IoCloseOutline, IoCheckmarkOutline } from "react-icons/io5";
import { isLight, primary, surfaceBg, surfaceBgHover, primaryText, accent, accentHover, main, mainHover, grey } from "../theme/themeVars";

function signUp() {

    const [typingPassword, setTypingPassword] = useState(false);
    const [isMoreThan8, setIsMoreThan8] = useState(false);
    const [containsUp, setContainsUp] = useState(false);
    const [containsLow, setContainsLow] = useState(false);
    const [containsNum, setContainsNum] = useState(false);
    const [containsSpecial, setContainsSpecial] = useState(false);
    const [containsSpace, setContainsSpace] = useState(true);
    const [readTerms, setReadTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [otp, setOtp] = useState(false)


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
        if(hasUppercase(value)) {
            setContainsUp(true)
        } else {
            setContainsUp(false);
        }
        if(hasLowercase(value)) {
            setContainsLow(true)
        } else {
            setContainsLow(false);
        }
        if(hasNumber(value)) {
            setContainsNum(true)
        } else {
            setContainsNum(false);
        }
        if(hasSpecialCharacters(value)) {
            setContainsSpecial(true)
        } else {
            setContainsSpecial(false);
        }
        if(value.includes(" ")) {
            setContainsSpace(true)
        } else {
            setContainsSpace(false);
        }
    }
    

    return (
        <>
            {otp ? (
                <OtpWindow />

            ):(
                 <main className={`absolute w-[90%] lg:w-[80%] h-[70vh] min-h-[600px] md:h-[90vh] p-4 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center bg-(${surfaceBg}) rounded-2xl md:rounded-4xl`}>
                     <section className={`relative w-full lg:w-[50%] h-[20%] md:h-[30%] lg:h-full rounded-2xl md:rounded-4xl bg-(${primary}) overflow-hidden`}>
                        <div className='w-full h-full'>
                            <div className='w-full h-full bg-[url(/logo.webp)] bg-center bg-no-repeat bg-contain'></div>
                        </div>
                        <div className='absolute bottom-3 right-[50%] translate-x-1/2 w-[50%] h-5 mx-auto flex items-center space-x-2'>
                            <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                            <p className='w-[50%] border hover:border-2 cursor-pointer'></p>
                            <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                        </div>
                    </section>
                    <section className={`lg:w-[50%] h-[75%] md:h-[60%] lg:h-full p-2 md:p-10 flex items-center justify-center rounded-2xl md:rounded-4xl text-(${primaryText}) overflow-y-scroll no-scrollbar`}>
                        <div className="w-full h-full mt-5 md:mt-0">
                            <h1 className='text-2xl'>Create an account</h1>
                            <p className={`mt-1 text-(${grey}) text-xs md:text-base`}>Already have an account? <span className={`cursor-pointer text-(${main}) hover:text-(${mainHover})`} onClick={()=> window.location.replace("/sign-in")}>Log in</span></p>
        
                            <form action="" className='mt-5' onSubmit={() => setOtp(true)}>
        
                                <input type="email" className={`w-full mt-3 p-3 bg-(${surfaceBgHover}) rounded-md text-(${primaryText}) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(${main})`} placeholder='Enter an email address' required />
                                <span className='relative'>
                                    <input type={showPassword ? "text" : "password"} className={`w-full mt-3 p-3 bg-(${surfaceBgHover}) rounded-md text-(${primaryText}) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(${main})`} placeholder='Create a password' onChange={(e)=> {setTypingPassword(true), collectValue(e.target.value)}} required />
                                    {showPassword ? (
                                        <IoEyeOffOutline className={`absolute top-[50%] right-5 -translate-y-1/2 text-(${primaryText}) hover:text-(${mainHover}) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={() => setShowPassword(false)}/>
                                    ):(
                                        <IoEyeOutline className={`absolute top-[50%] right-5 -translate-y-1/2 text-(${primaryText}) hover:text-(${mainHover}) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={() => setShowPassword(true)}/>
                                    )}
                                </span>
                                <div className={displayPasswordQualities()}>
                                    {isMoreThan8 ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must be at least 8 characters</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must be at least 8 characters</p>
                                    )}
                                    {containsUp ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one uppercase letter</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one uppercase letter</p>
                                    )}
                                    {containsLow ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one lowercase letter</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one lowercase letter</p>
                                    )}
                                    {containsNum ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one digit 0-9</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one digit 0-9</p>
                                    )}
                                    {containsSpecial ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one special key</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one special key</p>
                                    )}
                                    {!containsSpace ? (
                                        <p className='text-green-500 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Do not separate letters by space</p>
                                    ):(
                                        <p className='text-red-500 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Do not separate letters by space</p>
                                    )}
                                </div>
                                <p className='mt-2 text-xs md:text-sm flex items-center' onClick={() => setReadTerms(prev => !prev)}>{readTerms ? <IoRadioButtonOnOutline className={`inline mr-2 cursor-pointer hover:text-(${accentHover})`} /> : <IoRadioButtonOffOutline className={`inline mr-2 cursor-pointer hover:text-(${accentHover})`} />} I agree to the <span className={`ml-1 text-(${accent}) underline cursor-pointer hover:text-(${accentHover})`}> terms & conditions</span></p>
                                <button className={`w-full mt-5 md:mt-7 py-2 px-4 bg-(${main}) text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer`}>Create Account</button>
                                
                            </form>
        
                            <div className={`relative w-full mt-10 border-t border-(${surfaceBgHover})`}>
                                <p className={`absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 px-3 pb-1 bg-(${surfaceBg}) text-xs md:text-sm`}>Or register with</p>
                                <button className={`w-full mt-5 md:mt-7 py-2 px-4 border text-(${primaryText}) text-sm md:text-base rounded-md cursor-pointer`}>Continue with Google</button>
                            </div>
                        </div>
                    </section> 
                </main> 
            )}
        
        </>
    );
}

function hasUppercase(str: string): boolean {
    return /[A-Z]/.test(str);
}
function hasLowercase(str: string): boolean {
    return /[a-z]/.test(str);
}
function hasNumber(str: string): boolean {
    return /[0-9]/.test(str);
}
function hasSpecialCharacters(str: string): boolean {
    return /[^a-zA-Z0-9\s]/.test(str);
}

function OtpWindow() {
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    const inputRef3 = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        setValue(value);
    }, [value])

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
        <main className={`absolute w-[70%] md:w-[50%] lg:w-[30%] lg:min-w-[400px] h-[70vh] md:min-h-[30vh] max-h-[300px] px-5 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center bg-[var(${surfaceBg})] rounded-2xl md:rounded-4xl text-(--primary-text-dark)`}>
            <form action="" className='w-full '>
                <div className='w-full flex items-center justify-center space-x-3 md:space-x-7'>
                    <input ref={inputRef} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(${surfaceBgHover})] rounded-md text-lg md:text-2xl text-center font-bold text-(${primaryText}) ring-2 ring-(--primary-text-dark) focus:outline-0 focus:ring-2 focus:ring-(${main})`} value={value} onInput={(e) => checkValue(e.currentTarget.value, 0)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 0)}/>
                    
                    <input ref={inputRef1} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(${surfaceBgHover})] rounded-md text-lg md:text-2xl text-center font-bold text-(${primaryText}) ring-2 ring-(--primary-text-dark) focus:outline-0 focus:ring-2 focus:ring-(${main})`} value={value1} onInput={(e) => checkValue(e.currentTarget.value, 1)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 1)}/>
                    
                    <input ref={inputRef2} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(${surfaceBgHover})] rounded-md text-lg md:text-2xl text-center font-bold text-(${primaryText}) ring-2 ring-(--primary-text-dark) focus:outline-0 focus:ring-2 focus:ring-(${main})`} value={value2} onInput={(e) => checkValue(e.currentTarget.value, 2)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 2)}/>
                    
                    <input ref={inputRef3} type='text' className={`w-[3rem] md:w-[4rem] p-3 md:p-5 bg-[var(${surfaceBgHover})] rounded-md text-lg md:text-2xl text-center font-bold text-(${primaryText}) ring-2 ring-(--primary-text-dark) focus:outline-0 focus:ring-2 focus:ring-(${main}))`} value={value3} onInput={(e) => checkValue(e.currentTarget.value, 3)} onKeyDown={(e) => backTick(e, e.currentTarget.value, 3)}/>

                </div>
                <p className={`mt-5 italic text-xs md:text-sm text-(${grey})`}><span className={`text-(${accent}) cursor-pointer`}>Resend OTP?</span> Wait <span>30</span> seconds</p>
                <button className={`w-full mt-5 md:mt-7 py-2 px-4 bg-(${main}) hover:bg-(${mainHover}) text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer`}>Create Account</button>
            </form>
        </main>
    )
}

export default signUp;