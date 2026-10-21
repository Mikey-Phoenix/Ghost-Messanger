import { useRef } from 'react';
// import { Link } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
// import { IoSunnyOutline } from "react-icons/io5";
// import { primary, surfaceBg, primaryText, accent, main, } from "../theme/themeVars";
import { useTheme } from "../context/themeContext";


function home() {
    const { theme, toggleTheme } = useTheme();
    const glitchBlue1 = useRef<HTMLDivElement>(null);
    const glitchBlue2 = useRef<HTMLDivElement>(null);
    const glitchBlue3 = useRef<HTMLDivElement>(null);
    const glitchBlue4 = useRef<HTMLDivElement>(null);
    const glitchMagenta1 = useRef<HTMLDivElement>(null);
    const glitchMagenta2 = useRef<HTMLDivElement>(null);
    const glitchMagenta3 = useRef<HTMLDivElement>(null);
    const glitchMagenta4 = useRef<HTMLDivElement>(null);

    function hoverGlitch({a, b}:{
        a: any
        b: any
    }) {
        a.current.classList.remove("-translate-1")
        b.current.classList.remove("translate-1")
        a.current.classList.add("translate-2")
        b.current.classList.add("-translate-2")
    }
    function hoverGlitchOut({a, b}:{
        a: any
        b: any
    }) {
        a.current.classList.remove("translate-2")
        b.current.classList.remove("-translate-2")
        a.current.classList.add("-translate-1")
        b.current.classList.add("translate-1")
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 w-screen h-20 p-2 md:px-25 flex items-center justify-between text-(--primary-text) bg-(--primary) z-100`}>
                <img src="/icon.webp" alt="" className='w-[50px] md:w-[100px]' />
                
                {theme == "light" ? (
                    <div className={`py-1 px-2 flex items-center space-x-2 rounded-md bg-(--surface-bg) shadow-lg`} onClick={toggleTheme}>
                        <div className={`py-2 px-4 bg-(--main) text-(--primary-text) text-xs md:text-sm font-bold rounded-md cursor-pointer`}>
                            <IoSunnyOutline />
                        </div>
                        <div className={`py-2 px-4 text-(--primary-text) text-sm md:text-base rounded-md cursor-pointer`}>
                            <IoMoonOutline />
                        </div>
                    </div>
                ):(
                    <div className={`py-1 px-2 flex items-center space-x-2 rounded-md bg-(--surface-bg) shadow-lg`} onClick={toggleTheme}>
                        <div className={`py-2 px-4 text-(--primary-text) text-sm md:text-base rounded-md cursor-pointer`}>
                            <IoSunnyOutline />
                        </div>
                        <div className={`py-2 px-4 bg-(--accent) text-(--primary-text) text-xs md:text-sm font-bold rounded-md cursor-pointer`}>
                            <IoMoonOutline />
                        </div>
                    </div>

                )}
            </nav>

            <main className=' overflow-x-hidden'>
                <div className='relative h-screen w-screen md:p-5 overflow-hidden'>
                    <div className='absolute left-[50%] animate-[spin_20s_linear_infinite] -z-20'>
                        <div className='w-[1000px] h-[1000px] rounded-full bg-(--main) opacity-3 shadow-2xl shadow-main'></div>
                        <div className='w-[1000px] h-[1000px] rounded-full bg-(--accent) opacity-3 shadow-2xl shadow-main'></div>
                    </div>

                    <div className='lg:flex justify-between'>
                        <div className='w-full lg:translate-x-10 pt-20 text-center lg:text-left text-white md:text-4xl z-20'>
                            <div className='relative w-fit h-50 md:mb-5 mx-auto lg:mx-0 flex items-center justify-center'>
                                <img src="/logo.webp" alt="" className='w-50 md:w-100' />
                                <p className={`absolute bottom-10 md:bottom-0 left-5 md:left-0 tracking-[0.5em] text-(--main) michroma-regular`}>Messe<span className={`text-(--primary)`}>ng</span>er</p>
                            </div>
                            <p className={`md:w-2/3 mx-auto lg:mx-0 px-2 text-(--primary-text) text-sm text-center lg:text-left md:text-lg motserrat-100`}>Send messages, photos and voice notes that stay between you and the people you choose. Fast, private and simple enough for the whole family.</p>
                            <button className="w-1/4 mt-5 py-2 px-4 bg-(--accent-deep) hover:bg-(--accent-hover) text-white text-sm md:text-base rounded-md cursor-pointer" onClick={() => window.location.replace("/sign-up")}>Get App</button>
                        </div>

                        <img src="/hero3.webp" alt="" className='h-[43vh] md:h-[70vh] lg:h-screen mx-auto motion-safe:animate-float' />
                    </div>

                </div>


                <h1 className='w-[90vw] mx-auto mt-5 michroma-regular text-xl md:text-3xl text-(--primary-text)'>Features</h1>
                <div className={`w-full md:w-[90vw] h-screen mx-auto p-5 py-10 text-(primaryText)`} >
                    <div className='h-2/3 md:h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='relative' onMouseOver={() => hoverGlitch({a: glitchBlue1, b: glitchMagenta1})} onMouseOut={() => hoverGlitchOut({a: glitchBlue1, b: glitchMagenta1})}>
                            <div ref={glitchBlue1} className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--accent)/60 -z-5'></div>
                            <div ref={glitchMagenta1} className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--main)/60 -z-5'></div>
                            <div className={`h-fit bg-(--surface-bg) rounded-md flex-col`}>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Private by default</h1>
                                    <p className='text-(--grey-500)'>Messages are encrypted on your device, so only you and the people you message can read them.</p>
                                </div>
                            </div>

                        </div>
                                
                        <div className='relative' onMouseOver={() => hoverGlitch({a: glitchBlue2, b: glitchMagenta2})} onMouseOut={() => hoverGlitchOut({a: glitchBlue2, b: glitchMagenta2})}>
                            <div ref={glitchBlue2} className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--accent)/60 -z-5'></div>
                            <div ref={glitchMagenta2} className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--main)/60 -z-5'></div>
                            <div className={`h-fit bg-(--surface-bg) rounded-md flex-col`}>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Messages that fade</h1>
                                    <p className='text-(--grey-500)'>Set a timer and chats disappear when you want them to, in one-to-one and group conversations.</p>
                                </div>
                            </div>

                        </div>
                        <div className='relative' onMouseOver={() => hoverGlitch({a: glitchBlue3, b: glitchMagenta3})} onMouseOut={() => hoverGlitchOut({a: glitchBlue3, b: glitchMagenta3})}>
                            <div ref={glitchBlue3} className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--accent)/60 -z-5'></div>
                            <div ref={glitchMagenta3} className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--main)/60 -z-5'></div>
                            <div className={`h-fit bg-(--surface-bg) rounded-md flex-col`}>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Fast everywhere</h1>
                                    <p className='text-(--grey-500)'>Quick delivery on any connection, with your chats kept in sync across your phone and desktop.</p>
                                </div>
                            </div>

                        </div>
                        <div className='relative' onMouseOver={() => hoverGlitch({a: glitchBlue4, b: glitchMagenta4})} onMouseOut={() => hoverGlitchOut({a: glitchBlue4, b: glitchMagenta4})}>
                            <div ref={glitchBlue4} className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--accent)/60 -z-5'></div>
                            <div ref={glitchMagenta4} className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--main)/60 -z-5'></div>
                            <div className={`h-fit bg-(--surface-bg) rounded-md flex-col`}>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Create group chats</h1>
                                    <p className='text-(--grey-500)'>Create group chats, manage members, and keep everyone connected in one place.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default home;