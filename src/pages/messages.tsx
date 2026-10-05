import React from 'react';
import { IoChatbubble, IoChatbubbles, IoSettings, IoSearch, IoSend, IoCheckmarkDone } from "react-icons/io5";
import { IoMdArchive, IoMdMore } from "react-icons/io";
import { FaPhone, FaArrowDownLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

function messages() {
    // #ff00ff
    // #00ffff
    return (
        <>
            <main className='relative md:p-5 w-full h-screen flex flex-col md:flex-row space-x-5'>
                <section className="fixed md:static bottom-3 w-full md:w-[15%] lg:w-[5%] h-[5%] min-h-12.5 order-1 md:order-0 md:h-full pt-2 md:pt-4 rounded-md bg-(--surface-dark) flex md:flex-col space-y-10 opacity-100 z-50 md:z-0">
                    <IoChatbubble className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" />
                    <FaPhone className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" />
                    <IoChatbubbles className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" />
                    <IoSettings className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" />
                </section>
                <section className="w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-dark)">
                    <div className="w-full h-[10%] mt-2 flex items-center justify-between">
                        <img src="/logo.webp" alt="Ghost Logo" width="100px" />
                        <FaPlus className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl cursor-pointer" />
                    </div>
                    <div className='bg-(--primary-text-dark) pl-2 mt-5 flex items-center space-x-2 rounded-md'>
                        <IoSearch className="text-(--primary-dark) text-2xl md:text-3xl " />
                        <input className='w-full rounded-md p-2 focus:outline-none focus:ring-0' type="text" placeholder='Search persons' />
                    </div>
                    <div className='w-[90%] mx-auto mt-5 p-2 flex items-center space-x-4 text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                        <IoMdArchive className='text-2xl md:text-3xl' />
                        <p>Archived</p>
                    </div>
                    <div className='mt-5 h-[60%] overflow-y-scroll no-scrollbar'>
                        <div>
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                            <div className='w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                                <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                                <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                                    <h4 className='font-semibold text-base'>Name</h4>
                                    <p className='text-sm opacity-60'>Message preview</p>
                                </div>
                                <div>
                                    <p className='bg-(--color-main) rounded-full w-6 h-6 flex items-center justify-center font-black float-right'>5</p> <br />
                                    <p className='text-sm opacity-60'>11:05 PM</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="relative lg:block md:w-[80%] lg:w-[70%] h-full rounded-md border border-(--surface-dark) bg-[url('/pattern_1.webp')]">
                    <div className='w-full h-[7%] md:h-[10%] p-5 mb-2 flex items-center justify-between text-(--primary-text-dark) cursor-pointer bg-(--surface-dark)'>
                        <div className='flex items-center space-x-4'>
                            <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                            <h4 className='font-semibold text-xl'>Name</h4>
                        </div>
                        <div className='flex items-center space-x-10'>
                            <FaPhone className="text-(--primary-text-dark) hover:text-(--color-main) text-xl mx-auto cursor-pointer" />
                            <IoMdMore className="text-(--primary-text-dark) hover:text-(--color-main) text-3xl ml-5 cursor-pointer" />
                        </div>
                    </div>
                    <div className='w-full h-[77%] relative'>
                        <div className='w-full h-fit max-h-full px-3 pb-3 sticky top-full overflow-y-scroll no-scrollbar'>
                            <div className='rounded-md w-fit mx-auto my-2 px-3 py-1 font-semibold bg-(--color-main) text-white text-sm md:text-base'>Today</div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>Heyyyy <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Suuuuup <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>You dey play Lagos Life? <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>On top fake money game <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Oga shift! <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>😂 <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            
                            <div className='rounded-md w-fit mx-auto my-2 px-3 py-1 font-semibold bg-(--color-main) text-white text-sm md:text-base'>Today</div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>Heyyyy <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Suuuuup <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>You dey play Lagos Life? <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>On top fake money game <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Oga shift! <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>😂 <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            
                            <div className='rounded-md w-fit mx-auto my-2 px-3 py-1 font-semibold bg-(--color-main) text-white text-sm md:text-base'>Today</div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>Heyyyy <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Suuuuup <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>You dey play Lagos Life? <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>On top fake money game <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Oga shift! <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>😂 <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            
                            <div className='rounded-md w-fit mx-auto my-2 px-3 py-1 font-semibold bg-(--color-main) text-white text-sm md:text-base'>Today</div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>Heyyyy <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Suuuuup <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>You dey play Lagos Life? <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>On top fake money game <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Oga shift! <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>😂 <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            
                            <div className='rounded-md w-fit mx-auto my-2 px-3 py-1 font-semibold bg-(--color-main) text-white text-sm md:text-base'>Today</div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>Heyyyy <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Suuuuup <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>You dey play Lagos Life? <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>On top fake money game <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className="w-full relative">
                                <div className='rounded-md sticky left-full w-fit mb-1 px-3 py-1 bg-(--surface-dark) text-white text-sm md:text-base'>Oga shift! <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            </div>
                            <div className='relative rounded-md w-fit mb-1 px-3 py-1 bg-(--color-main) text-white text-sm md:text-base'>😂 <span className='absolute top-full right-0 text-(--color-accent) cursor-pointer' title="Delivered"><IoCheckmarkDone className='' /></span> <span className=' absolute top-full left-0 text-xs opacity-60'>11:00 PM</span></div>
                            
                        </div>
                        <FaArrowDownLong className='absolute bottom-5 right-5 p-1.5 w-7 h-7 rounded-full text-white text-xs md-text-base bg-(--color-accent)' />
                    </div>
                    <div className=' mx-auto md:ml-5 w-[95%] max-h-14 bg-(--surface-dark) text-(--primary-text-dark) rounded-md flex items-center'>
                        <input className='p-3 w-full focus:outline-none focus:ring-0' type="text" placeholder='Type your message ...' />
                        <IoSend className=' w-[10%] md:w-[5%] h-full p-1 mr-3 text-(--color-main) rounded-md cursor-pointer' />
                    </div>
                </section>
            </main>
        </>
    );
}

export default messages;