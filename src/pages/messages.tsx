import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        localStorage.setItem("currentSect", currentSect);
    }, [currentSect]);

    function changeSect(sect: string) {
        setCurrentSect(sect);
    }

    return (
        <>
            <main className='relative md:p-5 w-full h-screen flex flex-col md:flex-row space-x-5'>
                <section className="fixed md:static bottom-3 w-full md:w-[15%] lg:w-[5%] h-[5%] min-h-12.5 order-1 md:order-0 md:h-full pt-2 md:pt-4 rounded-md bg-(--surface-dark) flex md:flex-col space-y-10 opacity-100 z-50 md:z-0">
                    {currentSect == "messages" ?(
                        <div className="w-full py-2 rounded-md bg-(--color-main)">
                            <IoChatbubbleOutline className="text-(--primary-text-dark) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                        </div>
                    ):(
                        <div>
                            <IoChatbubbleOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                        </div>

                    )}
                    <div>
                        <IoCallOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                    </div>
                    <div>
                        <IoChatbubblesOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                    </div>
                    {currentSect == "settings" || currentSect == "settings/privacy" || currentSect == "settings/notify" || currentSect == "settings/theme" ? (
                        <div className="w-full py-2 rounded-md bg-(--color-main)">
                            <IoSettingsOutline className="text-(--primary-text-dark) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                        </div>

                    ):(
                        <div>
                            <IoSettingsOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                        </div>

                    )}
                </section>
                <section className="w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-dark)">
                    {currentSect == "messages" ? (
                        <MessageBar />
                    ): (
                        <SetBar changeSect={changeSect} currentSect={currentSect} />
                    )}
                </section>
                <section className="relative lg:block md:w-[80%] lg:w-[70%] h-full rounded-md border border-(--surface-dark) bg-[url('/pattern_1.webp')]">
                    {currentSect == "settings" ? (
                        <ProfileSect />
                    ): currentSect == "settings/privacy" ? (
                        <PrivacySect />
                    ): currentSect == "settings/notify" ? (
                        <NotifySect />
                    ): currentSect == "settings/theme" ? (
                        <ThemeSect />
                    ) : (
                        <MessageSect />
                    )}
                </section>
            </main>
        </>
    );
}

export default messages;