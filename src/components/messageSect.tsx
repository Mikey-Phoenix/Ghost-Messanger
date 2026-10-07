import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { IoCheckmarkDone, IoCallOutline, IoSendSharp } from "react-icons/io5";

export default function messageSect() {
    return (
        <>
            <div className='w-full h-[7%] md:h-[10%] p-5 mb-2 flex items-center justify-between text-(--primary-text-dark) cursor-pointer bg-(--surface-dark)'>
                <div className='flex items-center space-x-4'>
                    <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                    <h4 className='font-semibold text-xl'>Name</h4>
                </div>
                <div className='flex items-center space-x-10'>
                    <IoCallOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-xl mx-auto cursor-pointer" />
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
                <IoSendSharp className=' w-[10%] md:w-[5%] h-full p-1 mr-3 text-(--color-main) rounded-md cursor-pointer' />
            </div>
        </>
    )
}