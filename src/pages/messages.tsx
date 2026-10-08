import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IoChatbubbleOutline, IoChatbubblesOutline, IoSettingsOutline, IoCallOutline  } from "react-icons/io5";
import SetBar from "../components/setBar"
import MessageBar from "../components/messageBar"
import MessageSect from '../components/messageSect';
import ProfileSect from '../components/profileSect';
import PrivacySect from '../components/privacySect';
import NotifySect from '../components/notifySect';
import ThemeSect from '../components/themeSect';

function messages() {
    // #ff00ff
    // #00ffff

    // const [currentSect, setCurrentSect] = useState("messages");

    // localStorage.setItem("currentSect", currentSect);
    // console.log(localStorage.getItem("currentSect"))
    
    
    // function changeSect (sect:string) {
    //     setCurrentSect(sect);
    //     localStorage.setItem("currentSect", sect);
    //     console.log(currentSect)
    // }

    const [currentSect, setCurrentSect] = useState(
        () => localStorage.getItem("currentSect") || "messages"
    );
    const [isShowSect, setIsShowSect] = useState(false)

    useEffect(() => {
        localStorage.setItem("currentSect", currentSect);
    }, [currentSect]);

    function changeSect(sect: string) {
        setCurrentSect(sect);
        if (sect == "settings/profile" || sect == "settings/privacy" || sect == "settings/notify" || sect == "settings/theme" || sect == "messages/show") {
            setIsShowSect(true);
        } else {
            setIsShowSect(false);
        }
        console.log('====================================');
        console.log(isShowSect);
        console.log('====================================');
    }

    function notify(message: string) {
        toast.error(message)
    }

    return (
        <>
            <main className='relative md:p-5 w-full h-screen flex flex-col md:flex-row space-x-5'>
                {isShowSect ? (
                    <section className="hidden lg-block w-full md:w-[15%] h-[5%] min-h-12.5 md:h-full p-1 md:pt-4 rounded-md lg:w-[5%] fixed md:static bottom-0 bg-(--surface-dark) opacity-100 z-50 md:z-0">
                        <div className='w-full flex md:flex-col items-center justify-evenly md:space-y-5'>
                            {currentSect == "messages" ?(
                                <div className="h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--color-main)" title='chats'>
                                    <IoChatbubbleOutline className="text-(--primary-text-dark) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                                </div>
                            ):(
                                <div className='h-fit px-5 md:px-0 lg:w-full py-2' title='chats'>
                                    <IoChatbubbleOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                                </div>

                            )}
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => notify("This feature is currently disabled.")}>
                                <IoCallOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer"/>
                            </div>
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => notify("This feature is currently disabled.")}>
                                <IoChatbubblesOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer"/>
                            </div>
                            {currentSect == "settings" || currentSect == "settings/privacy" || currentSect == "settings/notify" || currentSect == "settings/theme" ? (
                                <div className="h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--color-main)" title='settings'>
                                    <IoSettingsOutline className="text-(--primary-text-dark) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                                </div>

                            ):(
                                <div className=" h-fit px-5 md:px-0 lg:w-full py-2" title='settings'>
                                    <IoSettingsOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                                </div>

                            )}

                        </div>
                    </section>

                ): (
                    <section className="w-full md:w-[15%] h-[5%] min-h-12.5 md:h-full p-1 md:pt-4 rounded-md lg:w-[5%] fixed md:static bottom-0 bg-(--surface-dark) opacity-100 z-50 md:z-0">
                        <div className='w-full flex md:flex-col items-center justify-evenly md:space-y-5'>
                            {currentSect == "messages" ?(
                                <div className="h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--color-main)" title='chats'>
                                    <IoChatbubbleOutline className="text-(--primary-text-dark) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                                </div>
                            ):(
                                <div className='h-fit px-5 md:px-0 lg:w-full py-2' title='chats'>
                                    <IoChatbubbleOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                                </div>

                            )}
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => notify("This feature is currently disabled.")}>
                                <IoCallOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer"/>
                            </div>
                            <div className="h-fit px-5 md:px-0 lg:w-full py-2 opacity-50" title="disabled" onClick={() => notify("This feature is currently disabled.")}>
                                <IoChatbubblesOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer"/>
                            </div>
                            {currentSect == "settings" || currentSect == "settings/privacy" || currentSect == "settings/notify" || currentSect == "settings/theme" ? (
                                <div className="h-fit px-5 lg:px-0 lg:w-full py-2 rounded-md bg-(--color-main)" title='settings'>
                                    <IoSettingsOutline className="text-(--primary-text-dark) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                                </div>

                            ):(
                                <div className=" h-fit px-5 md:px-0 lg:w-full py-2" title='settings'>
                                    <IoSettingsOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                                </div>

                            )}

                        </div>
                    </section>
                )}

                {isShowSect ? (
                    <section className="hidden lg:block w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-dark)">
                        {currentSect == "messages" || currentSect == "messages/show" ? (
                            <MessageBar changeSect={changeSect} currentSect={currentSect}/>
                        ): (
                            <SetBar changeSect={changeSect} currentSect={currentSect}/>
                        )}
                    </section>
                ):(
                    <section className="w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-dark)">
                        {currentSect == "messages" || currentSect == "messages/show" ? (
                            <MessageBar changeSect={changeSect} currentSect={currentSect}/>
                        ): (
                            <SetBar changeSect={changeSect} currentSect={currentSect}/>
                        )}
                    </section>

                )}

                {isShowSect ? (
                    <section className="relative lg:block md:w-[80%] lg:w-[70%] h-full rounded-md border border-(--surface-dark) bg-[url('/pattern_1.webp')]">
                        {currentSect == "settings" || currentSect == "settings/profile" ? (
                            <ProfileSect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ): currentSect == "settings/privacy" ? (
                            <PrivacySect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ): currentSect == "settings/notify" ? (
                            <NotifySect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ): currentSect == "settings/theme" ? (
                            <ThemeSect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ) : (
                            <MessageSect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        )}
                    </section>
                ):(
                    <section className="relative hidden lg:block md:w-[80%] lg:w-[70%] h-full rounded-md border border-(--surface-dark) bg-[url('/pattern_1.webp')]">
                        {currentSect == "settings" || currentSect == "settings/profile" ? (
                            <ProfileSect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ): currentSect == "settings/privacy" ? (
                            <PrivacySect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ): currentSect == "settings/notify" ? (
                            <NotifySect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ): currentSect == "settings/theme" ? (
                            <ThemeSect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        ) : (
                            <MessageSect isShowSect={isShowSect} setIsShowSect={setIsShowSect}/>
                        )}
                    </section>

                )}
            </main>
            <ToastContainer theme='dark' />
        </>
    );
}

export default messages;