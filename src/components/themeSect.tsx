import {useState, useEffect} from "react";
import { IoCheckmarkOutline, IoChevronBackOutline } from "react-icons/io5";



type Props = {
    isShowSect: boolean;
    setIsShowSect: (isShowSect: boolean) => void;
    radioPop: boolean;
    setRadioPop: (radioPop: boolean) => void;
    setTitle: (title: string) => void;
    items: any;
    setItems: (items: any) => void;
    active: number;
    setActive: (active: number) => void;
    // setDescription: (description: string) => void;
};
export default function themeSect({ isShowSect, setIsShowSect, radioPop, setRadioPop, setTitle, items, setItems, active, setActive }: Props) { 
    const [appearanceRadio, setAppearanceRadio] = useState(true);

    useEffect(()=>{
        setAppearanceRadio(appearanceRadio);
    }, [appearanceRadio])

    function changeRadio({radioName, radioFunc}:{
        radioName: boolean;
        radioFunc: (radioName: boolean) => void;
    }){
        radioFunc(!radioName)
    }

    function openRadioPopUp({title, items, active}:{
        title: string;
        items: any;
        active: number;
    }) {
        setRadioPop(true);
        setTitle(title);
        setItems(items);
        setActive(active);
    }
    return (
        <div className="w-full h-full px-5 pt-5 relative bg-(--surface-dark) overflow-y-scroll no-scrollbar">
            <div className='w-full h-[7%] md:h-[10%] md:p-5 mb-2 flex items-center justify-between text-(--color-main) cursor-pointer bg-(--surface-dark)'>
                <div className='font-semibold text-xl flex items-center space-x-5'><span className="lg:hidden text-(--primary-text-dark) hover:text-(--surface-dark)" onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Appearance</h4></div>
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

                <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={() => openRadioPopUp({title:"Themes", items:["System", "Light", "Dark"], active:0})}>
                    <div>
                        <p>Theme</p>
                        <p className="text-sm text-(--secondary-text-dark) opacity-60">Default</p>
                    </div>
                </div>
            </div>
            <div className="relative w-full text-(--primary-text-dark) my-5 pt-5 border-t-2 border-(--surface-dark-hover) cursor-pointer hover:bg-(--surface-dark-hover)">
                <span className="absolute top-0 left-0 text-sm opacity-60">Accessibility</span>

                <div className="w-full px-2 py-5 rounded-md flex items-center justify-between text-(--primary-text-dark) md:text-xl" onClick={() => changeRadio({radioName:appearanceRadio, radioFunc:setAppearanceRadio})}>
                <div>
                    <p>Animations</p>
                    <p className="text-sm text-(--secondary-text-dark) opacity-60">Enable or disable animations</p>
                </div>
                {appearanceRadio ? (
                    <div className="w-17 h-9 pr-1.5 mr-10 flex items-center justify-end rounded-full bg-(--color-main)">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--surface-dark)">
                            <IoCheckmarkOutline className="text-(--color-main)" />
                        </div>
                    </div>
                ):(
                    <div className="w-17 h-9 pl-1.5 mr-10 flex items-center rounded-full border-4 border-(--color-main) bg-(--surface-dark) opacity-60 hover:opacity-100">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--color-main)">
                            {/* <IoCheckmarkOutline className="text-(--color-main)" /> */}
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}