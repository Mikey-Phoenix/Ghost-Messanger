import {useState, useEffect, useRef} from 'react';
// import { Navigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import { primary, surfaceBg, surfaceBgHover, primaryText, main, mainHover, grey } from "../theme/themeVars";

function signIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
            // Navigate("/messages");
            window.location.replace("/messages")
        } else {
            alert(data.error);
        }
    } catch (error) {
        alert("Could not reach the server. Is it running?");
    }
}
    

    useEffect(()=>{
        setShowPassword(showPassword);
    }, [showPassword])

    return (
        <main className={`absolute w-[90%] lg:w-[80%] h-[70vh] min-h-[600px] md:h-[90vh] p-4 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center bg-(--surface-bg) rounded-2xl md:rounded-4xl`}>
            <section className={`block lg:hidden relative w-full lg:w-[50%] h-[20%] md:h-[30%] lg:h-full rounded-2xl md:rounded-4xl bg-(--primary) text-(--primary-text) overflow-hidden`}>
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
                <div>
                    <h1 className='text-2xl'>Welcome back</h1>
                    <p className={`mt-1 text-(--grey-400) text-xs md:text-base`}>Don't have an account? <span className={`cursor-pointer text-(--main)`} onClick={()=> window.location.replace("/sign-up")}>Sign up</span></p>

                    <form action="" className='mt-5' onSubmit={handleLogin}>
                        <input type="text" className={`w-full mt-3 p-3 bg-(--surface-bg-hover) rounded-md text-(--primary-text) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(--main)`} placeholder='Email or Username' onChange={(e) => setEmail(e.target.value)} required />
                        <span className='relative'>
                            <input type={showPassword ? "text" : "password"} className={`w-full mt-3 p-3 bg-(--surface-bg-hover) rounded-md text-(--primary-text) text-sm md:text-base focus:outline-0 focus:ring-2 focus:ring-(--main)`} placeholder='Create a password' onChange={(e) => setPassword(e.target.value)} required />
                            {showPassword ? (
                                <IoEyeOffOutline className={`absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text) hover:text-(--main-hover) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={() => setShowPassword(false)}/>
                            ):(
                                <IoEyeOutline className={`absolute top-[50%] right-5 -translate-y-1/2 text-(--primary-text) hover:text-(--main-hover) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={() => setShowPassword(true)}/>
                            )}
                        </span>
                        <button className={`w-full mt-5 md:mt-7 py-2 px-4 bg-(--main) text-white text-sm md:text-base rounded-md cursor-pointer`}>Log in</button>
                    </form>

                    <div className={`relative w-full mt-10 border-t border-(--surface-bg-hover)`}>
                        <p className={`absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 px-3 pb-1 bg-(--surface-bg-hover) text-xs md:text-sm`}>Or login with</p>
                        <button className={`w-full mt-5 md:mt-7 py-2 px-4 border text-(--primary-text) text-sm md:text-base rounded-md cursor-pointer`}>Continue with Google</button>
                    </div>
                </div>
            </section>
            <section className={`hidden lg:block relative w-full lg:w-[50%] h-[20%] md:h-[30%] lg:h-full rounded-2xl md:rounded-4xl bg-(--primary) text-(--primary-text) overflow-hidden`}>
                <div className='w-full h-full'>
                    <div className='w-full h-full bg-[url(/logo.webp)] bg-center bg-no-repeat bg-contain'></div>
                </div>
                <div className='absolute bottom-3 right-[50%] translate-x-1/2 w-[50%] h-5 mx-auto flex items-center space-x-2'>
                    <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                    <p className='w-[50%] border hover:border-2 cursor-pointer'></p>
                    <p className='w-[25%] opacity-60 border hover:border-2 cursor-pointer'></p>
                </div>
            </section>
            
        </main>
    );
}

export default signIn;