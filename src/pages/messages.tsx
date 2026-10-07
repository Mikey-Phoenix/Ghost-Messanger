import React, { useState } from 'react';
import { IoChatbubbleOutline, IoChatbubblesOutline, IoSettingsOutline, IoCallOutline  } from "react-icons/io5";
import SetBar from "../components/setBar"
import MessageBar from "../components/messageBar"
import MessageSect from '../components/messageSect';
import ProfileSect from '../components/profileSect';

function messages() {
    // #ff00ff
    // #00ffff

    const [currentSect, setCurrentSect] = useState("messages");

    function changeSect (sect:string) {
        setCurrentSect(sect);
        console.log(currentSect)
    }

    return (
        <>
            <main className='relative md:p-5 w-full h-screen flex flex-col md:flex-row space-x-5'>
                <section className="fixed md:static bottom-3 w-full md:w-[15%] lg:w-[5%] h-[5%] min-h-12.5 order-1 md:order-0 md:h-full pt-2 md:pt-4 rounded-md bg-(--surface-dark) flex md:flex-col space-y-10 opacity-100 z-50 md:z-0">
                    <IoChatbubbleOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                    <IoCallOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                    <IoChatbubblesOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("messages")}/>
                    <IoSettingsOutline className="text-(--primary-text-dark) hover:text-(--color-main) text-2xl md:text-3xl mx-auto cursor-pointer" onClick={()=> changeSect("settings")}/>
                </section>
                <section className="w-full md:w-[80%] lg:w-[25%] h-full md:h-full px-4 rounded-md bg-(--surface-dark)">
                    {currentSect == "settings" ? (
                        <SetBar />
                    ): (
                        <MessageBar />
                    )}
                </section>
                <section className="relative lg:block md:w-[80%] lg:w-[70%] h-full rounded-md border border-(--surface-dark) bg-[url('/pattern_1.webp')]">
                    {currentSect == "settings" ? (
                        <ProfileSect />
                    ): (
                        <MessageSect />
                    )}
                </section>
            </main>
        </>
    );
}

export default messages;