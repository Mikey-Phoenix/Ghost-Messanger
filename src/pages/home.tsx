import React from 'react';
import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";

function home() {
    return (
        <>
            <nav className='hidden fixed top-0 left-0 w-full h-20 px-25 flex items-center justify-between text-(--primary-text-dark)'>
                <img src="/logo.webp" alt="" width={"100px"} />
                {/* <div className='w-[25%] flex items-center justify-evenly text-xl'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/messages"}>About</Link>
                </div> */}
                <div className="py-1 px-2 flex items-center space-x-2 border rounded-md bg-white/10 backdrop-blur-md border-white/20 shadow-lg">
                    <button className="py-2 px-4 text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer">Sign In</button>
                    <button className="py-2 px-4 bg-(--color-main) text-(--primary-text-dark) text-xs md:text-sm md:text-lg font-bold rounded-md cursor-pointer">Sign Up</button>
                </div>
            </nav>

            <main>
                <div className='relative h-screen w-screen p-5 overflow-hidden'>
                    <div className='absolute left-[50%] animate-[spin_20s_linear_infinite] -z-20'>
                        <div className='w-[1000px] h-[1000px] rounded-full bg-(--color-main) opacity-3 shadow-2xl shadow-main'></div>
                        <div className='w-[1000px] h-[1000px] rounded-full bg-(--color-accent) opacity-3 shadow-2xl shadow-main'></div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='w-full translate-x-10 pt-20 text-(--primary-text-dark) text-4xl z-20'>
                            <div className='relative w-fit h-50 mb-5 flex items-center justify-center'>
                                <img src="/logo.webp" alt="" className='w-100' />
                                <p className='absolute bottom-0 left-0 tracking-[0.5em] text-(--color-main) michroma-regular'>Messe<span className='text-(--primary-dark)'>ng</span>er</p>
                            </div>
                            <p className='w-2/3 text-(--primary-text-dark) text-lg motserrat-100'>Send messages, photos and voice notes that stay between you and the people you choose. Fast, private and simple enough for the whole family.</p>
                            <button className="w-1/4 mt-5 py-2 px-4 bg-(--color-accent-deep) hover:bg-(--color-accent-hover) text-(--primary-text-dark) text-sm md:text-base rounded-md cursor-pointer">Get App</button>
                        </div>

                        {/* <div className="h-screen w-screen translate-x-30 bg-[url('/public/hero3.webp')] bg-contain bg-center bg-no-repeat -z-10"></div> */}
                        <img src="/hero3.webp" alt="" className='h-screen motion-safe:animate-float' />
                        {/* <div className='h-[1000px] w-[1000px] bg-(--color-main-subtle-dark)'>
                        </div>
                        <div className='absolute right-0 top-0 h-screen w-20 bg-(--primary-dark)'>
                        </div> */}
                    </div>



                        <div className='absolute bottom-5 left-5 w-1/4 michroma-regular text-(--primary-text-dark) text-sm text-justify'>
                            {/* <div className='h-20 w-full px-1 flex items-center space-x-1 bg-(--primary-light) rounded-md'>
                                <div className='w-18 h-18 rounded-md bg-(--primary-dark)'>
                                    <div className='w-full h-full flex items-center justify-center text-5xl text-(--color-accent-subtle-dark)'>
                                        <IoPlayCircleOutline />
                                    </div>
                                </div>
                                <p className='w-[70%] text-left text-(--color-accent-subtle-dark) '>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, facilis quaerat. Pariatur incidunt laborum quam quia quae beatae maxime id a debitis deleniti, ea aut voluptatum distinctio, numquam molestias hic?</p> */}
                        </div>

                        {/* <div className='absolute right-5 top-[50%] w-1/4 michroma-regular text-(--primary-text-dark) text-sm text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae expedita delectus dignissimos modi, itaque cum dolorem nihil molestias? Aspernatur deserunt cupiditate eveniet a quis ullam nisi vitae dolore odio nemo!</div> */}

                </div>
            </main>
        </>
    );
}

export default home;