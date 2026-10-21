import {useState, useEffect} from "react";
import { IoCheckmarkOutline, IoChevronBackOutline } from "react-icons/io5";
import { isLight, primary, surfaceBg, surfaceBgHover, primaryText, secondaryText, accent, accentHover, main, mainHover, grey, pattern1, pattern2, pattern3, pattern4, pattern1_dark, pattern2_dark, pattern3_dark, pattern4_dark } from "../../theme/themeVars";
import { useTheme } from "../../context/themeContext"

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

    const { theme } = useTheme()


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
        <div className={`w-full h-full px-2 md:px-5 pt-5 relative bg-(${surfaceBg}) overflow-y-scroll no-scrollbar`}>
            <div className={`w-full h-[7%] md:h-[10%] md:p-5 mb-2 flex items-center justify-between text-(${main}) cursor-pointer bg-(${surfaceBg})`}>
                <div className='font-semibold text-xl flex items-center space-x-5'><span className={`lg:hidden text-(${primaryText}) hover:text-(${main})`} onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Appearance</h4></div>
            </div>
            <div className="w-full overflow-x-scroll no-scrollbar">
                <div className="flex space-x-2">
                    <div className={`text-(${primaryText}) hover:bg-(${surfaceBgHover}) rounded-md cursor-pointer p-2`}>
                        <div className={`w-[200px] h-[400px] rounded-md border-4 border-(${main}) bg-[${pattern1}]`} style={{ backgroundImage: theme === "light" ? pattern1 : pattern1_dark }}></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 1</p>
                            <p className={`w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(${main}) text-(${surfaceBg})`}><IoCheckmarkOutline /></p>
                        </div>
                    </div>
                    <div className={`text-(${primaryText}) hover:bg-(${surfaceBgHover}) rounded-md cursor-pointer p-2`}>
                        <div className={`w-[200px] h-[400px] rounded-md border-4 border-(${surfaceBgHover}) bg-[${pattern2}]`} style={{ backgroundImage: theme === "light" ? pattern2 : pattern2_dark }}></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 2</p>
                            <p className={`hidden w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(${main}) text-(${surfaceBg})`}><IoCheckmarkOutline /></p>
                        </div>
                    </div>
                    <div className={`text-(${primaryText}) hover:bg-(${surfaceBgHover}) rounded-md cursor-pointer p-2`}>
                        <div className={`w-[200px] h-[400px] rounded-md border-4 border-(${surfaceBgHover}) bg-[${pattern3}]`} style={{ backgroundImage: theme === "light" ? pattern3 : pattern3_dark }}></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 3</p>
                            <p className={`hidden w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(${main}) text-(${surfaceBg})`}><IoCheckmarkOutline /></p>
                        </div>
                    </div>
                    <div className={`text-(${primaryText}) hover:bg-(${surfaceBgHover}) rounded-md cursor-pointer p-2`}>
                        <div className={`w-[200px] h-[400px] rounded-md border-4 border-(${surfaceBgHover}) bg-[${pattern4}]`} style={{ backgroundImage: theme === "light" ? pattern4 : pattern4_dark }}></div>
                        <div className="flex items-center space-x-3 w-fit mx-auto mt-2">
                            <p className="text-center">Pattern 4</p>
                            <p className={`hidden w-7 h-7 flex items-center justify-center text-xl rounded-full bg-(${main}) text-(${surfaceBg})`}><IoCheckmarkOutline /></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`relative w-full text-(${primaryText}) my-5 pt-5 border-t-2 border-(${surfaceBgHover})`}>
                <span className={`absolute top-0 left-0 text-xs md:text-sm text-(${grey})`}>Theme</span>

                <div className={`w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => openRadioPopUp({title:"Themes", items:["System", "Light", "Dark"], active:0})}>
                    <div>
                        <p>Theme</p>
                        <p className={`text-xs md:text-sm text-(${secondaryText})`}>Default</p>
                    </div>
                </div>
            </div>
            <div className={`relative w-full text-(${primaryText}) my-5 pt-5 border-t-2 border-(${surfaceBgHover}) cursor-pointer hover:bg-(${surfaceBgHover})`}>
                <span className={`absolute top-0 left-0 text-xs md:text-sm text-(${grey})`}>Accessibility</span>

                <div className={`w-full px-2 py-5 rounded-md flex items-center justify-between text-(${primaryText}) md:text-xl`} onClick={() => changeRadio({radioName:appearanceRadio, radioFunc:setAppearanceRadio})}>
                <div>
                    <p>Animations</p>
                    <p className={`text-xs md:text-sm text-(${secondaryText})`}>Enable or disable animations</p>
                </div>
                {appearanceRadio ? (
                    <div className={`w-17 h-9 pr-1.5 ml-3 md:ml-0 md:mr-10 flex items-center justify-end rounded-full bg-(${main})`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-(${surfaceBg})`}>
                            <IoCheckmarkOutline className={`text-(${main})`} />
                        </div>
                    </div>
                ):(
                    <div className={`w-17 h-9 pl-1.5 ml-3 md:ml-0 md:mr-10 flex items-center rounded-full border-4 border-(${main}) bg-(${surfaceBg}) opacity-60 hover:opacity-100`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-(${main})`}>
                            {/* <IoCheckmarkOutline className="text-(--color-main)" /> */}
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}