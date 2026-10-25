import { IoArchiveOutline, IoSearchOutline, IoPersonAddOutline  } from "react-icons/io5";
import { surfaceBgHover, primaryText, main, grey } from "../../theme/themeVars";

type Props = {
    changeSect: (sect: string) => void;
    currentSect: string;
    // action: () => void;
};
export default function messageBar({changeSect, currentSect}: Props) {

    
    return (
        <>
            <div className="w-full h-[10%] mt-2 flex items-center justify-between">
                <img src="/logo.webp" alt="Ghost Logo" width="100px" />
                <IoPersonAddOutline title='discover' className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl cursor-pointer`} onClick={() => changeSect("discover")} />
            </div>
            <div className={`bg-(--surface-bg-hover) text-(--primary-text) pl-2 mt-5 flex items-center space-x-2 rounded-md`}>
                <IoSearchOutline className={`text-(--primary-text) text-2xl md:text-3xl`} />
                <input className='w-full rounded-md p-2 focus:outline-none focus:ring-0' type="text" placeholder='Search persons' />
            </div>
            <div className={`w-[90%] mx-auto mt-5 p-2 flex items-center space-x-4 text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`}>
                <IoArchiveOutline className='text-2xl md:text-3xl' />
                <p>Archived</p>
            </div>
            <div className='mt-5 h-[60%] overflow-y-scroll no-scrollbar'>
                <div>
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                    <div className={`'w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`} onClick={()=> changeSect("messages/show")}>
                        <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                        <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                            <h4 className='font-semibold text-base'>Name</h4>
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>Message preview</p>
                        </div>
                        <div>
                            <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center float-right`}>5</p> <br />
                            <p className={`text-xs md:text-sm text-(--grey-400)`}>11:05 PM</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}