import react, {useState, useEffect} from 'react';
import { IoChevronBackOutline, IoCheckmarkOutline } from "react-icons/io5";


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
export default function privacySect({ isShowSect, setIsShowSect, radioPop, setRadioPop, setTitle, items, setItems, active, setActive }: Props) {
    
    const [receiptsRadio, setReceiptsRadio] = useState(true);
    const [disappearRadio, setDisappearRadio] = useState(false);

    useEffect(()=>{
        setReceiptsRadio(receiptsRadio);
        setDisappearRadio(disappearRadio);
    }, [receiptsRadio, disappearRadio])

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
        <div className="w-full h-full px-2 md:px-5  pt-2 bg-(--surface-dark) relative overflow-y-scroll no-scrollbar">
            <div className='w-full h-[7%] md:h-[10%] md:p-5 mb-2 flex items-center justify-between text-(--color-main) cursor-pointer bg-(--surface-dark)'>
                <div className='font-semibold text-xl flex items-center space-x-5'><span className="lg:hidden text-(--primary-text-dark) hover:text-(--color-main)" onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Privacy</h4></div>
            </div>
            <div className="relative mt-5 pt-5 border-t-2 border-(--surface-dark-hover)">
                {/* <span className="absolute top-0 left-0 text-xs md:text-sm text-(--primary-text-dark) opacity-60">Who sees your info</span> */}

                <div className="w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={() => openRadioPopUp({title: "Last seen & Online", items: ["Everybody", "Friends", "Nobody"], active: 0})}>
                    <p>Last seen & Online</p>
                </div>
                <div className="w-full px-2 py-5 rounded-md flex items-center justify-between text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={() => changeRadio({radioName:receiptsRadio, radioFunc:setReceiptsRadio})}>
                    <div>
                        <p>Read receipts</p>
                        <p className="text-xs md:text-sm text-(--secondary-text-dark) opacity-60">Let them know you've read their messages</p>
                    </div>
                    {receiptsRadio ? (
                        <div className="w-17 h-9 pr-1.5 ml-3 md:ml-0 md:mr-10 flex items-center justify-end rounded-full bg-(--color-main)">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--surface-dark)">
                                <IoCheckmarkOutline className="text-(--color-main)" />
                            </div>
                        </div>
                    ):(
                        <div className="w-17 h-9 pl-1.5 ml-3 md:ml-0 md:mr-10 flex items-center rounded-full border-4 border-(--color-main) bg-(--surface-dark) opacity-60 hover:opacity-100">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--color-main)">
                                {/* <IoCheckmarkOutline className="text-(--color-main)" /> */}
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full px-2 py-5 rounded-md flex items-center justify-between text-(--primary-text-dark) md:text-xl cursor-pointer hover:bg-(--surface-dark-hover)" onClick={() => changeRadio({radioName:disappearRadio, radioFunc:setDisappearRadio})}>
                    <div>
                        <p>Disappearing messages</p>
                        <p className="text-xs md:text-sm text-(--secondary-text-dark) opacity-60">Messages are deleted automatically after a week</p>
                    </div>
                    {disappearRadio ? (
                        <div className="w-17 h-9 pr-1.5 ml-3 md:ml-0 md:mr-10 flex items-center justify-end rounded-full bg-(--color-main)">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--surface-dark)">
                                <IoCheckmarkOutline className="text-(--color-main)" />
                            </div>
                        </div>
                    ):(
                        <div className="w-17 h-9 pl-1.5 ml-3 md:ml-0 md:mr-10 flex items-center rounded-full border-4 border-(--color-main) bg-(--surface-dark) opacity-60 hover:opacity-100">
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