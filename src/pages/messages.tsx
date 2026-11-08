import { useState, useEffect } from 'react';
import { socket } from "../socket";
import PopUp, {RadioPop} from '../components/popUp';
import { sileo } from "sileo"
import { useTheme } from "../context/themeContext";
import { pattern1, pattern1_dark } from "../theme/themeVars";
import { ToastContainer, toast } from 'react-toastify';
import { IoChatbubbleOutline, IoChatbubblesOutline, IoSettingsOutline, IoCallOutline  } from "react-icons/io5";
import SetBar from "../components/sideBars/setBar"
import MessageBar from "../components/sideBars/messageBar"
import MessageSect from '../components/sections/messageSect';
import ProfileSect from '../components/sections/profileSect';
import PrivacySect from '../components/sections/privacySect';
import NotifySect from '../components/sections/notifySect';
import ThemeSect from '../components/sections/themeSect';
import SearchSect from '../components/sections/searchSect';


type Selected = { id: string; username: string };

function messages() {
    const [currentSect, setCurrentSect] = useState(
        () => localStorage.getItem("currentSect") || "messages"
    );
    const [isShowSect, setIsShowSect] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [placeholder, setPlaceholder] = useState("");
    const [isPassword, setIsPassword] = useState<boolean>(false);

    const [radioPop, setRadioPop] = useState(false);
    const [items, setItems] = useState(null);
    const [active, setActive] = useState(0)

    const { theme } = useTheme();

    const [selected, setSelected] = useState<Selected | null>(null);
    
    
    useEffect(() => {
        localStorage.setItem("currentSect", currentSect);
        setIsPassword(title === "Password");
        socket.connect();
        return () => {
            socket.disconnect();
        };
    }, [currentSect, isPassword]);

    function handleSelect(id: string, username: string) {
        setSelected({ id, username });
        console.log(id, username)
    }

    function changeSect(sect: string) {
        setCurrentSect(sect);
        if (sect === "settings/profile" || sect === "settings/privacy" || sect === "settings/notify" || sect === "settings/theme" || sect === "messages/show" || sect === "discover") {
            setIsShowSect(true);
        } else {
            setIsShowSect(false);
            
        }
        console.log('====================================');
        console.log(isShowSect, sect);
        console.log('====================================');
    }

    function notify(message: string) {
        toast.error(message)
    }

    const pattern = pattern1
    const patternDark = pattern1_dark

    return (
        <>
            <main className='relative md:p-5 w-full h-screen flex flex-col md:flex-row space-x-2'>
                {isShowSect ? (
                    <section className={`hidden lg:block w-full md:w-[15%] h-[5%] min-h-12.5 md:h-full p-1 md:pt-4 rounded-md lg:w-[5%] fixed md:static bottom-0 bg-(--surface-bg) opacity-100 z-50 md:z-0`}>

                        <div className='w-full flex md:flex-col items-center justify-evenly md:space-y-5'>
                            {currentSect == "messages" ?(
                                <div className={`h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--main)`} title='chats'>
                                    <IoChatbubbleOutline className={`text-(--surface-bg) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("messages")}/>
                                </div>
                            ):(
                                <div className='h-fit px-5 md:px-0 lg:w-full py-2' title='chats'>
                                    <IoChatbubbleOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("messages")}/>
                                </div>

                            )}
                            {/* <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => notify("This feature is currently disabled.")}>
                                <IoCallOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`}/>
                            </div> */}
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => sileo.error({ title: "Disabled", description: "This feature is currently unavailable"})}>
                                <IoCallOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`}/>
                            </div>
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => sileo.error({ title: "Disabled", description: "This feature is currently unavailable"})}>
                                <IoChatbubblesOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`}/>
                            </div>
                            {currentSect == "settings" || currentSect == "settings/privacy" || currentSect == "settings/notify" || currentSect == "settings/theme" ? (
                                <div className={`h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--main)`} title='settings'>
                                    <IoSettingsOutline className={`text-(--surface-bg) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("settings")}/>
                                </div>

                            ):(
                                <div className=" h-fit px-5 md:px-0 lg:w-full py-2" title='settings'>
                                    <IoSettingsOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("settings")}/>
                                </div>

                            )}

                        </div>
                    </section>

                ): (
                    <section className={`w-full md:w-[15%] h-[5%] min-h-12.5 md:h-full p-1 md:pt-4 rounded-md lg:w-[5%] fixed md:static bottom-0 bg-(--surface-bg) opacity-100 z-50 md:z-0`}>
                        <div className='w-full flex md:flex-col items-center justify-evenly md:space-y-5'>
                            {currentSect == "messages" ?(
                                <div className={`h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--main)`} title='chats'>
                                    <IoChatbubbleOutline className={`text-(--surface-bg) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("messages")}/>
                                </div>
                            ):(
                                <div className='h-fit px-5 md:px-0 lg:w-full py-2' title='chats'>
                                    <IoChatbubbleOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("messages")}/>
                                </div>

                            )}
                            {/* <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => notify("This feature is currently disabled.")}>
                                <IoCallOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`}/>
                            </div> */}
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => sileo.error({ title: "Disabled", description: "This feature is currently unavailable"})}>
                                <IoCallOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`}/>
                            </div>
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => sileo.error({ title: "Disabled", description: "This feature is currently unavailable"})}>
                                <IoChatbubblesOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`}/>
                            </div>
                            {currentSect == "settings" || currentSect == "settings/privacy" || currentSect == "settings/notify" || currentSect == "settings/theme" ? (
                                <div className={`h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--main)`} title='settings'>
                                    <IoSettingsOutline className={`text-(--surface-bg) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("settings")}/>
                                </div>

                            ):(
                                <div className=" h-fit px-5 md:px-0 lg:w-full py-2" title='settings'>
                                    <IoSettingsOutline className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl mx-auto cursor-pointer`} onClick={()=> changeSect("settings")}/>
                                </div>

                            )}

                        </div>
                    </section>
                )}

                {isShowSect ? (
                    <section className={`hidden lg:block w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-bg)`}>
                        {currentSect == "messages" || currentSect == "messages/show" || currentSect == "discover" ? (
                            <MessageBar changeSect={changeSect} currentSect={currentSect} onSelect={handleSelect} selectedId={selected?.id ?? null}/>
                        ): (
                            <SetBar changeSect={changeSect} currentSect={currentSect}/>
                        )}
                    </section>
                ):(
                    <section className={`w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-bg)`}>
                        {currentSect == "messages" || currentSect == "messages/show" || currentSect == "discover" ? (
                            <MessageBar changeSect={changeSect} currentSect={currentSect} onSelect={handleSelect} selectedId={selected?.id ?? null}/>
                        ): (
                            <SetBar changeSect={changeSect} currentSect={currentSect}/>
                        )}
                    </section>

                )}

                {isShowSect ? (
                    <section className={`relative w-full lg:block lg:w-[70%] h-full rounded-md border border-(--surface-bg) bg-[${pattern}]')]`} style={{ backgroundImage: theme === "light" ? pattern : patternDark }}>
                        {currentSect == "settings" || currentSect == "settings/profile" ? (
                            <ProfileSect isShowSect={isShowSect} setIsShowSect={setIsShowSect} popUp={popUp} setPopUp={setPopUp} setTitle={setTitle} setDescription={setDescription} setPlaceholder={setPlaceholder} isPassword={isPassword} setIsPassword={setIsPassword} />
                        ): currentSect == "settings/privacy" ? (
                            <PrivacySect isShowSect={isShowSect} setIsShowSect={setIsShowSect} radioPop={radioPop} setRadioPop={setRadioPop} setTitle={setTitle} items={items} setItems={setItems} active={active} setActive={setActive} />
                        ): currentSect == "settings/notify" ? (
                            <NotifySect isShowSect={isShowSect} setIsShowSect={setIsShowSect} radioPop={radioPop} setRadioPop={setRadioPop} setTitle={setTitle} items={items} setItems={setItems} active={active} setActive={setActive} />
                        ): currentSect == "settings/theme" ? (
                            <ThemeSect isShowSect={isShowSect} setIsShowSect={setIsShowSect} radioPop={radioPop} setRadioPop={setRadioPop} setTitle={setTitle} items={items} setItems={setItems} active={active} setActive={setActive} />
                        ) : currentSect == "discover" ? (
                            <SearchSect isShowSect={isShowSect} setIsShowSect={setIsShowSect} changeSect={changeSect} setSelected={setSelected}  />
                        ) : (
                            <>
                            {selected ? (
                                <MessageSect key={selected.id} otherId={selected.id} otherName={selected.username} isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                            ) :(
                                <div className='w-full h-full flex items-center justify-center' style={{ backgroundImage: theme === "light" ? pattern : patternDark }}>
                                    <div className='w-max text-center'>
                                        <img src="/logo.webp" alt="Ghost Messenger" className='w-[45%] mx-auto'/>
                                        <h2 className="text-3xl text-(--primary-text) michroma-regular">Welcome to Ghost Messenger!</h2>
                                        <p className="text-xl text-(--grey-400) mt-3"><span className='cursor-pointer text-(--accent) hover:text-(--accent-hover)'>Start a conversation</span> or <span className='cursor-pointer text-(--main) hover:text-(--main-hover)'>Invite someone</span></p>
                                    </div>
                                </div>
                            )}
                            </>
                        )}
                    </section>
                ):(
                    <section className={`relative hidden w-full lg:block lg:w-[70%] h-full rounded-md border border-(--surface-bg) bg-[${pattern}]`}>
                        {currentSect == "settings" || currentSect == "settings/profile" ? (
                            <ProfileSect isShowSect={isShowSect} setIsShowSect={setIsShowSect} popUp={popUp} setPopUp={setPopUp} setTitle={setTitle} setDescription={setDescription} setPlaceholder={setPlaceholder} isPassword={isPassword} setIsPassword={setIsPassword} />
                        ): currentSect == "settings/privacy" ? (
                            <PrivacySect isShowSect={isShowSect} setIsShowSect={setIsShowSect} radioPop={radioPop} setRadioPop={setRadioPop} setTitle={setTitle} items={items} setItems={setItems} active={active} setActive={setActive} />
                        ): currentSect == "settings/notify" ? (
                            <NotifySect isShowSect={isShowSect} setIsShowSect={setIsShowSect} radioPop={radioPop} setRadioPop={setRadioPop} setTitle={setTitle} items={items} setItems={setItems} active={active} setActive={setActive} />
                        ): currentSect == "settings/theme" ? (
                            <ThemeSect isShowSect={isShowSect} setIsShowSect={setIsShowSect} radioPop={radioPop} setRadioPop={setRadioPop} setTitle={setTitle} items={items} setItems={setItems} active={active} setActive={setActive} />
                        ) : currentSect == "discover" ? (
                            <SearchSect isShowSect={isShowSect} setIsShowSect={setIsShowSect} changeSect={changeSect} setSelected={setSelected} />
                        ) : (
                            <>
                            {selected ? (
                                <MessageSect key={selected.id} otherId={selected.id} otherName={selected.username} isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                            ) :(
                                <div className='w-full h-full flex items-center justify-center' style={{ backgroundImage: theme === "light" ? pattern : patternDark }}>
                                    <div className='w-max text-center'>
                                        <img src="/logo.webp" alt="Ghost Messenger" className='w-[45%] mx-auto'/>
                                        <h2 className="text-3xl text-(--primary-text) michroma-regular">Welcome to Ghost Messenger!</h2>
                                        <p className="text-xl text-(--grey-400) mt-3"><span className='cursor-pointer text-(--accent) hover:text-(--accent-hover)'>Start a conversation</span> or <span className='cursor-pointer text-(--main) hover:text-(--main-hover)'>Invite someone</span></p>
                                    </div>
                                </div>
                            )}
                            </>
                        )}
                    </section>

                )}
            </main>
            {popUp && <PopUp popUp={popUp} setPopUp={setPopUp} title={title} description={description} placeholder={placeholder} isPassword={localStorage.getItem("isPassword") === "true"} setIsPassword={setIsPassword}  />}
            {radioPop && <RadioPop radioPop={radioPop} setRadioPop={setRadioPop} title={title} items={items} active={active} description='' placeholder='' isPassword={false} setIsPassword={setIsPassword} popUp={false} setPopUp={setPopUp} />}
            {/* <PopUp /> */}
            <ToastContainer theme={theme} />
        </>
    );
}

export default messages;