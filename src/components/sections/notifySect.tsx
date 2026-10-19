import { useEffect, useState } from "react";
import { IoCheckmarkOutline, IoChevronBackOutline } from "react-icons/io5";
import { isLight, primary, surfaceBg, surfaceBgHover, primaryText, secondaryText, accent, accentHover, main, mainHover, grey } from "../../theme/themeVars";

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
export default function notifySect({ isShowSect, setIsShowSect, radioPop, setRadioPop, setTitle, items, setItems, active, setActive }: Props) {

    const [convoRadio, setConvoRadio] = useState(true);
    const [reminderRadio, setReminderRadio] = useState(false);


    useEffect(()=>{
        setConvoRadio(convoRadio);
        setReminderRadio(reminderRadio);
    }, [convoRadio, reminderRadio])

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
        <div className={`w-full h-full pt-5 px-2 md:px-5 relative bg-(${surfaceBg}) overflow-y-scroll no-scrollbar`}>
            <div className={`w-full h-[7%] md:h-[10%] md:p-5 mb-2 flex items-center justify-between text-(${main}) cursor-pointer bg-(${surfaceBg})`}>
                <div className='font-semibold text-xl flex items-center space-x-5'><span className={`lg:hidden text-(${primaryText}) hover:text-(${main})`} onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Notifications</h4></div>
            </div>
            <div className={`w-full px-2 py-5 rounded-md flex items-center justify-between text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => changeRadio({radioName:convoRadio, radioFunc:setConvoRadio})}>
                <div>
                    <p>Conversation tones</p>
                    <p className={`text-xs md:text-sm text-(${secondaryText})`}>Play sounds for incoming and outgoing messages</p>
                </div>
                {convoRadio ? (
                    <div className={`w-17 h-9 pr-1.5 ml-3 md:ml-0 md:mr-10 flex items-center justify-end rounded-full bg-(${main})`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-(${surfaceBg})`}>
                            <IoCheckmarkOutline className={`"text-(${main})`} />
                        </div>
                    </div>
                ):(
                    <div className={`w-17 h-9 pl-1.5 ml-3 md:ml-0 md:mr-10 flex items-center rounded-full border-4 border-(${main}) bg-(${surfaceBg}) opacity-60 hover:opacity-100`}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center bg-(--color-main)">
                            {/* <IoCheckmarkOutline className={`"text-(${main})`} /> */}
                        </div>
                    </div>
                )}
            </div>
            <div className={`w-full px-2 py-5 rounded-md flex items-center justify-between text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => changeRadio({radioName:reminderRadio, radioFunc:setReminderRadio})}>
                <div>
                    <p>Reminders</p>
                    <p className={`text-xs md:text-sm text-(${secondaryText})`}>Get occasional reminders about messages you haven't seen</p>
                </div>
                {reminderRadio ? (
                    <div className={`w-17 h-9 pr-1.5 ml-3 md:ml-0 md:mr-10 flex items-center justify-end rounded-full bg-(${main})`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-(${surfaceBg})`}>
                            <IoCheckmarkOutline className={`"text-(${main})`} />
                        </div>
                    </div>

                ):(
                    <div className={`w-17 h-9 pl-1.5 ml-3 md:ml-0 md:mr-10 flex items-center rounded-full border-4 border-(${main}) bg-(${surfaceBg}) opacity-60 hover:opacity-100`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-(${main})`}>
                            {/* <IoCheckmarkOutline className={`"text-(${main})`} /> */}
                        </div>
                    </div>
                )}
            </div>

            <div className={`w-full relative border-t-2 border-(${surfaceBgHover}) mt-5 pt-5`}>
                <span className={`absolute top-0 left-0 text-xs md:text-sm text-(${secondaryText})`}>Messages</span>

                <div className={`w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => openRadioPopUp({title:"Notification Sounds", items:["Default", "Aria", "Beats"], active:0})}>
                    <div>
                        <p>Notification tone</p>
                        <p className={`"text-xs md:text-sm text-(${secondaryText})`}>Default</p>
                    </div>
                </div>
                <div className={`w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => openRadioPopUp({title:"Vibration", items:["Short", "Long", "Broken"], active:0})}>
                    <div>
                        <p>Vibrate</p>
                        <p className={`"text-xs md:text-sm text-(${secondaryText})`}>Short</p>
                    </div>
                </div>
            </div>
            <div className={`w-full relative border-t-2 border-(${surfaceBgHover}) mt-5 pt-5`}>
                <span className={`absolute top-0 left-0 text-xs md:text-sm text-(${grey})`}>Calls</span>

                <div className={`w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => openRadioPopUp({title:"Ringtones", items:["Default", "Song 1", "Song 2"], active:0})}>
                    <div>
                        <p>Ringtone</p>
                        <p className={`text-xs md:text-sm text-(${secondaryText})`}>Default</p>
                    </div>
                </div>
                <div className={`w-full px-2 py-5 rounded-md flex items-center space-x-5 text-(${primaryText}) md:text-xl cursor-pointer hover:bg-(${surfaceBgHover})`} onClick={() => openRadioPopUp({title:"Call Vibration", items:["Default", "Aria", "Beats"], active:0})}>
                    <div>
                        <p>Vibrate</p>
                        <p className={`text-xs md:text-sm text-(${secondaryText})`}>Short</p>
                    </div>
                </div>
            </div>
        </div>
    )
}