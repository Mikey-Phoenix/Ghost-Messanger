import React from 'react';
import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";

function home() {
    return (
        <>
            <nav className='fixed top-0 left-0 w-full h-20 p-2 md:px-25 flex items-center justify-between text-(--primary-text-dark) bg-(--primary-dark) z-100'>
                <img src="/icon.webp" alt="" className='w-[50px] md:w-[100px]' />
                {/* <div className='w-[25%] flex items-center justify-evenly text-xl'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/messages"}>About</Link>
                </div> */}
                <div className="py-1 px-2 flex items-center space-x-2 rounded-md bg-(--surface-dark) shadow-lg">
                    <button className="py-2 px-4 text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer" onClick={() => window.location.replace("/sign-in")}>Sign In</button>
                    <button className="py-2 px-4 bg-(--color-main) text-(--primary-text-dark) text-xs md:text-sm md:text-lg font-bold rounded-md cursor-pointer" onClick={() => window.location.replace("/sign-up")}>Sign Up</button>
                </div>
            </nav>

            <main>
                <div className='relative h-screen w-screen md:p-5 overflow-hidden'>
                    <div className='absolute left-[50%] animate-[spin_20s_linear_infinite] -z-20'>
                        <div className='w-[1000px] h-[1000px] rounded-full bg-(--color-main) opacity-3 shadow-2xl shadow-main'></div>
                        <div className='w-[1000px] h-[1000px] rounded-full bg-(--color-accent) opacity-3 shadow-2xl shadow-main'></div>
                    </div>

                    <div className='lg:flex justify-between'>
                        <div className='w-full lg:translate-x-10 pt-20 text-center lg:text-left text-(--primary-text-dark) md:text-4xl z-20'>
                            <div className='relative w-fit h-50 md:mb-5 mx-auto lg:mx-0 flex items-center justify-center'>
                                <img src="/logo.webp" alt="" className='w-50 md:w-100' />
                                <p className='absolute bottom-10 md:bottom-0 left-5 md:left-0 tracking-[0.5em] text-(--color-main) michroma-regular'>Messe<span className='text-(--primary-dark)'>ng</span>er</p>
                            </div>
                            <p className='md:w-2/3 mx-auto lg:mx-0 px-2 text-(--primary-text-dark) text-sm text-center lg:text-left md:text-lg motserrat-100'>Send messages, photos and voice notes that stay between you and the people you choose. Fast, private and simple enough for the whole family.</p>
                            <button className="w-1/4 mt-5 py-2 px-4 bg-(--color-accent-deep) hover:bg-(--color-accent-hover) text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer" onClick={() => window.location.replace("/sign-up")}>Get App</button>
                        </div>

                        <img src="/hero3.webp" alt="" className='h-[43vh] md:h-[70vh] lg:h-screen mx-auto motion-safe:animate-float' />
                    </div>

                </div>


                <h1 className='w-[90vw] mx-auto mt-5 michroma-regular text-xl md:text-3xl text-(--primary-text-dark)'>Features</h1>
                <div className='w-full md:w-[90vw] h-screen mx-auto p-5 py-10 text-(--primary-text-dark)' >
                    <div className='h-2/3 md:h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='relative'>
                            <div className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--color-accent)/60 -z-5'></div>
                            <div className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--color-main)/60 -z-5'></div>
                            <div className='h-fit bg-(--surface-dark) rounded-md flex-col'>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Private by default</h1>
                                    <p className='text-(--grey-500)'>Messages are encrypted on your device, so only you and the people you message can read them.</p>
                                </div>
                            </div>

                        </div>
                                
                        <div className='relative'>
                            <div className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--color-accent)/60 -z-5'></div>
                            <div className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--color-main)/60 -z-5'></div>
                            <div className='h-fit bg-(--surface-dark) rounded-md flex-col'>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Messages that fade</h1>
                                    <p className='text-(--grey-500)'>Set a timer and chats disappear when you want them to, in one-to-one and group conversations.</p>
                                </div>
                            </div>

                        </div>
                        <div className='relative'>
                            <div className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--color-accent)/60 -z-5'></div>
                            <div className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--color-main)/60 -z-5'></div>
                            <div className='h-fit bg-(--surface-dark) rounded-md flex-col'>
                                <div className='w-full overflow-hidden'>
                                    <img src="/placeholder.png" alt="" className="w-50 mx-auto"/>
                                </div>
                                <div className='p-2 text-center md:text-left md:p-4'>
                                    <h1 className='michroma-regular text-lg'>Fast everywhere</h1>
                                    <p className='text-(--grey-500)'>Quick delivery on any connection, with your chats kept in sync across your phone and desktop.</p>
                                </div>
                            </div>

                        </div>
                        <div className='relative'>
                            <div className='absolute w-full h-full -translate-1 hover:translate-2 bg-(--color-accent)/60 -z-5'></div>
                            <div className='absolute w-full h-full translate-1 hover:-translate-2 bg-(--color-main)/60 -z-5'></div>
                            <div className='h-fit bg-(--surface-dark) rounded-md flex-col'>
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