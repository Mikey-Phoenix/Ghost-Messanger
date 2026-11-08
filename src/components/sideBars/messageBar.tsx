import { useEffect, useState } from "react";
import { IoArchiveOutline, IoSearchOutline, IoPersonAddOutline  } from "react-icons/io5";
import { Blobatar } from "@blobatar/react";
import Preloader from "../preloader";
import { API_URL } from "../../config";

type Props = {
    changeSect: (sect: string) => void;
    currentSect: string;
    // action: () => void;
    selectedId: string | null;
    onSelect: (id: string, username: string) => void;
};

// type Contact = { id: string; username: string };

type Contact = {
    id: string;
    username: string;
    preview: string;
    lastAt: string;
    lastFromMe: boolean;
    unread: number;
};

function formatTime(iso: string) {
    return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

// type SidebarProps = {
//     // ...your existing props
// };
export default function messageBar({changeSect, currentSect, selectedId, onSelect}: Props) {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [active, setActive] = useState("");

    useEffect(() => {
        let cancelled = false;

        async function loadContacts() {
            try {
                const res = await fetch(`${API_URL}/api/users`, { credentials: "include" });
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || "Could not load users");
                if (!cancelled) setContacts(data);
            } catch (e) {
                if (!cancelled) setError(e instanceof Error ? e.message : "Something went wrong");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadContacts();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
            <div className="w-full h-[10%] mt-2 flex items-center justify-between">
                <img src="/logo.webp" alt="Ghost Logo" width="100px" />
                <IoPersonAddOutline title='discover' className={`text-(--primary-text) hover:text-(--main) text-2xl md:text-3xl cursor-pointer`} onClick={() => changeSect("discover")} />
            </div>
            <div className={`bg-(--surface-bg-hover) text-(--primary-text) pl-2 mt-5 flex items-center space-x-2 rounded-md`}>
                <IoSearchOutline className={`text-(--primary-text) text-2xl md:text-3xl`} />
                <input className='w-full rounded-md p-2 focus:outline-none focus:ring-0' type="text" placeholder='Search persons' />
            </div>
            <div className={`w-[90%] mx-auto mt-5 p-2 flex items-center space-x-4 text-(--primary-text) cursor-pointer hover:bg-(--surface-bg-hover)`}>
                <IoArchiveOutline className='text-2xl md:text-3xl' />
                <p>Archived</p>
            </div>
            <div className='mt-5 h-[60%] overflow-y-scroll no-scrollbar'>
                {loading && <div className='relative p-4 h-full'><Preloader background="(--surface-bg)" /></div>}
                {error && <p className='p-4 text-sm text-red-400'>{error}</p>}
                {!loading && !error && contacts.length === 0 && (
                    <div className='text-center'>
                        <img src="/logo.webp" alt="Ghost Messenger" className='w-[45%] mx-auto'/>
                        <h2 className="text-xl text-(--primary-text) michroma-regular">Welcome to Ghost Messenger!</h2>
                        <p className="text-base text-(--grey-400) mt-3"><span className='cursor-pointer text-(--accent) hover:text-(--accent-hover)' onClick={() => changeSect("discover")}>Start a conversation</span> or <span className='cursor-pointer text-(--main) hover:text-(--main-hover)'>Invite someone</span></p>
                    </div>
                )}
                <div>
                    {contacts.map((c) => (
                        <>
                        {active == c.id ? (
                            <ChatBar
                                key={c.id}
                                chatId={c.id}
                                chatName={c.username}
                                preview={c.lastFromMe ? `You: ${c.preview}` : c.preview}
                                time={formatTime(c.lastAt)}
                                messageCount={c.id === selectedId ? 0 : c.unread}
                                isSelected={c.id === selectedId}
                                changeSect={changeSect}
                                onSelect={onSelect}
                                setActive={setActive}
                                background={"(--surface-bg-hover)"}
                            />
                        ) : (
                            <ChatBar
                                key={c.id}
                                chatId={c.id}
                                chatName={c.username}
                                preview={c.lastFromMe ? `You: ${c.preview}` : c.preview}
                                time={formatTime(c.lastAt)}
                                messageCount={c.id === selectedId ? 0 : c.unread}
                                isSelected={c.id === selectedId}
                                changeSect={changeSect}
                                onSelect={onSelect}
                                setActive={setActive}
                                background={"transparent"}
                            />
                        )}
                        </>
                    ))}
                    {/* <ChatBar chatId="yeusi" chatName="David" preview="Message Preview" time="11:05 PM" messageCount={10} isSelected={true} changeSect={changeSect} onSelect={changeSect}/> */}
                </div>
            </div>
        </>
    );
}

type chatInfo = {
    chatId: string;
    chatName: string;
    preview?: string;
    time?: string;
    messageCount?: number;
    isSelected?: boolean;
    background: string;
    changeSect: (sect: string) => void;
    setActive: (sect: string) => void;
    onSelect: (id: string, name: string) => void;
}

export function ChatBar({chatId, chatName, preview, time, messageCount, isSelected, background, changeSect, setActive, onSelect}: chatInfo) {
    // messageCount = {c.id === selectedId ? 0 : c.unread}
    return (
        <div className={`w-full p-2 mb-3 rounded-md flex items-center justify-between text-(--primary-text) cursor-pointer bg-${background} hover:bg-(--surface-bg-hover)`} onClick={()=> { onSelect(chatId, chatName); changeSect("messages/show"); setActive(chatId)}}>
            <Blobatar name={chatName} width={"40px"} />
            <div className=' flex-col w-[65%] md:w-[75%] lg:w-[60%] justify-between'>
                <h4 className='font-semibold text-base truncate'>{chatName}</h4>
                {preview && <p className={`text-xs md:text-sm text-(--grey-400) truncate`}>{preview}</p>}
            </div>
            <div className='flex flex-col items-end'>
                {!!messageCount && (
                    <p className={`bg-(--main) rounded-full w-6 h-6 flex items-center justify-center`}>{messageCount}</p>
                )}
                {time && <p className={`text-xs md:text-sm text-(--grey-400)`}>{time}</p>}
            </div>
        </div>
    )
}