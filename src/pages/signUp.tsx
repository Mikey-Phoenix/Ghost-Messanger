import React, {useState, useEffect} from 'react';
import { IoRadioButtonOffOutline, IoRadioButtonOnOutline, IoEyeOffOutline, IoEyeOutline, IoCloseOutline, IoCheckmarkOutline } from "react-icons/io5";

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


    useEffect(()=>{
        setTypingPassword(typingPassword);
        setIsMoreThan8(isMoreThan8);
        setShowPassword(showPassword);
    }, [typingPassword, isMoreThan8, showPassword]);

    function displayPasswordQualities() {
        if(typingPassword) return "pl-2 mt-2"
        return "hidden pl-2 mt-2"
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
        <main className='absolute w-[90%] lg:w-[80%] h-[70vh] min-h-[600px] md:h-[90vh] p-4 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center bg-(--surface-dark) rounded-2xl md:rounded-4xl'>
            <section className='relative w-full lg:w-[50%] h-[20%] md:h-[30%] lg:h-full rounded-2xl md:rounded-4xl bg-(--primary-dark) text-(--primary-text-dark) overflow-hidden'>
                <div className='w-full h-full'>
                    <div className='w-full h-full bg-[url(/logo.webp)] bg-center bg-no-repeat bg-contain'></div>
                </div>
                <div className='absolute bottom-3 right-[50%] translate-x-1/2 w-[50%] h-5 mx-auto flex items-center space-x-2'>
                    <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                    <p className='w-[50%] border hover:border-2 cursor-pointer'></p>
                    <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                </div>
            </section>
            <section className='lg:w-[50%] h-[75%] md:h-[60%] lg:h-full md:p-10 flex items-center justify-center rounded-2xl md:rounded-4xl text-(--primary-text-dark) overflow-y-scroll no-scrollbar'>
                <div className="w-full h-full">
                    <h1 className='text-2xl'>Create an account</h1>
                    <p className='opacity-60 mt-1 text-xs md:text-base'>Already have an account? <span className='cursor-pointer text-(--color-main)' onClick={()=> window.location.replace("/sign-in")}>Log in</span></p>

                    <form action="" className='mt-5'>

                        <input type="email" className=" w-full mt-3 p-3 bg-(--surface-dark-hover) rounded-md text-(--primary-text-dark) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(--color-main)" placeholder='Enter an email address' required />
                        <span className='relative'>
                            <input type={showPassword ? "text" : "password"} className="w-full mt-3 p-3 bg-(--surface-dark-hover) rounded-md text-(--primary-text-dark) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(--color-main)" placeholder='Create a password' onChange={(e)=> {setTypingPassword(true), collectValue(e.target.value)}} required />
                            {showPassword ? (
                                <IoEyeOffOutline className="absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={() => setShowPassword(false)}/>
                            ):(
                                <IoEyeOutline className="absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={() => setShowPassword(true)}/>
                            )}
                        </span>
                        <div className={displayPasswordQualities()}>
                            {isMoreThan8 ? (
                                <p className='text-green-300 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must be at least 8 characters</p>
                            ):(
                                <p className='text-red-300 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must be at least 8 characters</p>
                            )}
                            {containsUp ? (
                                <p className='text-green-300 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one uppercase letter</p>
                            ):(
                                <p className='text-red-300 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one uppercase letter</p>
                            )}
                            {containsLow ? (
                                <p className='text-green-300 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one lowercase letter</p>
                            ):(
                                <p className='text-red-300 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one lowercase letter</p>
                            )}
                            {containsNum ? (
                                <p className='text-green-300 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one digit 0-9</p>
                            ):(
                                <p className='text-red-300 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one digit 0-9</p>
                            )}
                            {containsSpecial ? (
                                <p className='text-green-300 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Must contain at least one special key</p>
                            ):(
                                <p className='text-red-300 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Must contain at least one special key</p>
                            )}
                            {!containsSpace ? (
                                <p className='text-green-300 text-xs md:text-sm'><IoCheckmarkOutline className='inline mr-1' /> Do not separate letters by space</p>
                            ):(
                                <p className='text-red-300 text-xs md:text-sm'><IoCloseOutline className='inline mr-1' /> Do not separate letters by space</p>
                            )}
                        </div>
                        <p className='mt-2 text-xs md:text-sm flex items-center' onClick={() => setReadTerms(prev => !prev)}>{readTerms ? <IoRadioButtonOnOutline className='inline mr-2 cursor-pointer hover:text-(--color-main)' /> : <IoRadioButtonOffOutline className='inline mr-2 cursor-pointer hover:text-(--color-main)' />} I agree to the <span className='ml-1 text-(--color-accent)/60 underline cursor-pointer hover:text-(--color-accent)'>terms & conditions</span></p>
                        <button className="w-full mt-5 md:mt-7 py-2 px-4 bg-(--color-main) text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer">Create Account</button>
                        
                    </form>

                    <div className='relative w-full mt-10 border-t border-(--surface-dark-hover)'>
                        <p className='absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 px-3 pb-1 bg-(--surface-dark) opacity/60 text-xs md:text-sm'>Or register with</p>
                        <button className="w-full mt-5 md:mt-7 py-2 px-4 border text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer">Continue with Google</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default signUp;