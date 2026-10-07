import { IoCheckmarkOutline } from "react-icons/io5";

export default function themeSect() { 
    return (
        <div className="w-full h-full px-5 pt-5 relative bg-(--surface-dark) overflow-y-scroll no-scrollbar">
            <div className='w-full h-[7%] md:h-[10%] p-5 mb-2 flex items-center justify-between text-(--color-main) cursor-pointer bg-(--surface-dark)'>
                <h4 className='font-semibold text-xl'>Appearance</h4>
            </div>
            <div className="w-full overflow-x-scroll no-scrollbar">
                <div className="flex space-x-2">
                    <div className=" text-(--primary-text-dark) hover:bg-(--surface-dark-hover) rounded-md cursor-pointer p-2">
                        <div className="w-[200px] h-[400px] rounded-md border-4 border-(--surface-dark-hover) bg-[url('/pattern_1.webp')]"></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 1</p>
                            <p className="w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(--color-main) text-(--surface-dark)"><IoCheckmarkOutline /></p>
                        </div>
                    </div>
                    <div className=" text-(--primary-text-dark) hover:bg-(--surface-dark-hover) rounded-md cursor-pointer p-2">
                        <div className="w-[200px] h-[400px] rounded-md border-4 border-(--surface-dark-hover) bg-[url('/pattern_2.webp')]"></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 2</p>
                            <p className="hidden w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(--color-main) text-(--surface-dark)"><IoCheckmarkOutline /></p>
                        </div>
                    </div>
                    <div className=" text-(--primary-text-dark) hover:bg-(--surface-dark-hover) rounded-md cursor-pointer p-2">
                        <div className="w-[200px] h-[400px] rounded-md border-4 border-(--surface-dark-hover) bg-[url('/pattern_3.webp')]"></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 3</p>
                            <p className="hidden w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(--color-main) text-(--surface-dark)"><IoCheckmarkOutline /></p>
                        </div>
                    </div>
                    <div className=" text-(--primary-text-dark) hover:bg-(--surface-dark-hover) rounded-md cursor-pointer p-2">
                        <div className="w-[200px] h-[400px] rounded-md border-4 border-(--surface-dark-hover) bg-[url('/pattern_4.webp')]"></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 4</p>
                            <p className="hidden w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(--color-main) text-(--surface-dark)"><IoCheckmarkOutline /></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="relative w-full text-(--primary-text-dark) my-5 pt-5 border-t-2 border-(--surface-dark-hover)">
                <span className="absolute top-0 left-0 text-sm opacity-60">Theme</span>

                <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)">
                    <div>
                        <p>Theme</p>
                        <p className="text-sm text-(--secondary-text-dark) opacity-60">Default</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full text-(--primary-text-dark) my-5 pt-5 border-t-2 border-(--surface-dark-hover)">
                <span className="absolute top-0 left-0 text-sm opacity-60">Accessibility</span>

                <div className="w-full px-2 py-5 rounded-md flex items-center justify-between text-(--primary-text-dark) md:text-xl">
                <div>
                    <p>Animations</p>
                    <p className="text-sm text-(--secondary-text-dark) opacity-60">Enable or disable animations</p>
                </div>
                <div className="w-17 h-9 pr-1.5 mr-10 flex items-center justify-end rounded-full bg-(--color-main)">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--surface-dark) cursor-pointer hover:bg-(--surface-dark-hover)">
                        <IoCheckmarkOutline className="text-(--color-main)" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}