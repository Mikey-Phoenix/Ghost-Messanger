import { IoPersonAddOutline, IoChatbubbleOutline, IoSearchOutline, IoFilterOutline, IoChevronBackOutline } from "react-icons/io5";


type Props = {
    isShowSect: boolean;
    setIsShowSect: (isShowSect: boolean) => void;
} 
export default function searchSearch({isShowSect, setIsShowSect}: Props) {
    return(
        <div className="h-full overflow-y-scroll no-scrollbar">
            
            <div className='w-full h-[7%] md:h-[10%] md:p-5 mb-7 flex items-center justify-between text-(--color-main) cursor-pointer bg-(--surface-dark)'>
                <div className='font-semibold text-xl flex items-center space-x-5'><span className="lg:hidden text-(--primary-text-dark) hover:text-(--color-main)" onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Discover</h4></div>
            </div>

            <div className='w-[90%] pl-2 mx-auto my-5 bg-(--primary-text-dark) flex items-center space-x-2 rounded-md'>
                <IoSearchOutline className="text-(--primary-dark) text-2xl md:text-3xl " />
                <input className='w-full rounded-md p-2 focus:outline-none focus:ring-0' type="text" placeholder='Search persons' />
            </div>

            <h1 className="w-[90%] mx-auto text-xl md:text-3xl text-(--primary-text-dark) flex items-center space-x-3"><p>Filters</p> <IoFilterOutline /> </h1>

            <div className="w-[90%] mx-auto my-5 flex items-center space-x-3 md:space-x-10">
                <button className="py-1 px-2 md:py-2 md:px-4 flex items-center space-x-2 bg-(--color-main) hover:bg-(--color-main) text-(--primary-text-dark) text-xs md:text-lg rounded-md cursor-pointer">Near me</button>
                <button className="py-1 px-2 md:py-2 md:px-4 border text-(--primary-text-dark) text-xs md:text-base rounded-md cursor-pointer">Online</button>
                <button className="py-1 px-2 md:py-2 md:px-4 border text-(--primary-text-dark) text-xs md:text-base rounded-md cursor-pointer">Friends</button>
            </div>

            <div className="w-[90%] md:w-[80%] mx-auto">
                <div className="relative w-full px-5 py-3 mt-3 bg-(--surface-dark) flex items-center justify-evenly rounded-md">
                    <div className="w-full flex flex-wrap md:flex-nowrap items-center">
                        <img src="/dp1.png" alt="Profile Picture" className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" />
                        <div className="w-full pl-5 text-(--primary-text-dark)">
                            <h1 className="text-lg md:text-2xl">John Doe</h1>
                            <p className="text-xs md:text-sm"><span className="text-(--color-accent)">@username</span> | <span>24</span>.mutual ghosts</p>
                        </div>
                    </div>
                    <button className="absolute top-10 right-5 md:relative py-2 px-4 flex items-center space-x-2 bg-(--color-main) text-(--primary-text-dark) text-xs md:text-sm md:text-lg rounded-md cursor-pointer">
                        <IoPersonAddOutline />
                        <p>Add</p>
                    </button>
                </div>

                <div className="relative w-full px-5 py-3 mt-3 bg-(--surface-dark) flex items-center justify-evenly rounded-md">
                    <div className="w-full flex flex-wrap md:flex-nowrap items-center">
                        <img src="/dp2.png" alt="Profile Picture" className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" />
                        <div className="w-full pl-5 text-(--primary-text-dark)">
                            <h1 className="text-lg md:text-2xl">Jane Doe</h1>
                            <p className="text-xs md:text-sm"><span className="text-(--color-accent)">@username</span> | <span>14</span>.mutual ghosts</p>
                        </div>
                    </div>
                    <button className="absolute top-10 right-5 md:relative py-2 px-4 flex items-center space-x-2 bg-(--color-accent)/60 hover:bg-(--color-accent)/80 text-(--primary-text-dark) text-xs md:text-sm md:text-lg rounded-md cursor-pointer">
                        <IoChatbubbleOutline />
                        <p>Message</p>
                    </button>
                </div>

                <div className="relative w-full px-5 py-3 mt-3 bg-(--surface-dark) flex items-center justify-evenly rounded-md">
                    <div className="w-full flex flex-wrap md:flex-nowrap items-center">
                        <img src="/dp3.png" alt="Profile Picture" className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" />
                        <div className="w-full pl-5 text-(--primary-text-dark)">
                            <h1 className="text-lg md:text-2xl">Mike Pretchett</h1>
                            <p className="text-xs md:text-sm"><span className="text-(--color-accent)">@username</span> | <span>37</span>.mutual ghosts</p>
                        </div>
                    </div>
                    <button className="absolute top-10 right-5 md:relative py-2 px-4 flex items-center space-x-2 bg-(--color-accent)/60 hover:bg-(--color-accent)/80 text-(--primary-text-dark) text-xs md:text-sm md:text-lg rounded-md cursor-pointer">
                        <IoChatbubbleOutline />
                        <p>Message</p>
                    </button>
                </div>

                <div className="relative w-full px-5 py-3 mt-3 bg-(--surface-dark) flex items-center justify-evenly rounded-md">
                    <div className="w-full flex flex-wrap md:flex-nowrap items-center">
                        <img src="/dp4.png" alt="Profile Picture" className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full" />
                        <div className="w-full pl-5 text-(--primary-text-dark)">
                            <h1 className="text-lg md:text-2xl">Alice Keya</h1>
                            <p className="text-xs md:text-sm"><span className="text-(--color-accent)">@username</span> | <span>4</span>.mutual ghosts</p>
                        </div>
                    </div>
                    <button className="absolute top-10 right-5 md:relative py-2 px-4 flex items-center space-x-2 bg-(--color-main) text-(--primary-text-dark) text-xs md:text-sm md:text-lg rounded-md cursor-pointer">
                        <IoPersonAddOutline />
                        <p>Add</p>
                    </button>
                </div>

            </div>
            

        </div>
    )
}