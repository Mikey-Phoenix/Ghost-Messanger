import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoAddOutline, IoArchiveOutline  } from "react-icons/io5";

export default function messageBar() {
    return (
        <>
            <div className="w-full h-[10%] mt-2 flex items-center justify-between">
                <img src="/logo.webp" alt="Ghost Logo" width="100px" />
                <IoAddOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl cursor-pointer" />
            </div>
            <div className='bg-(--primary-text-dark) pl-2 mt-5 flex items-center space-x-2 rounded-md'>
                <IoSearch className="text-(--primary-dark) text-2xl md:text-3xl " />
                <input className='w-full rounded-md p-2 focus:outline-none focus:ring-0' type="text" placeholder='Search persons' />
            </div>
            <div className='w-[90%] mx-auto mt-5 p-2 flex items-center space-x-4 text-(--primary-text-dark) cursor-pointer hover:bg-(--surface-dark-hover)'>
                <IoArchiveOutline className='text-2xl md:text-3xl' />
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
        </>
    );
}