import { useEffect, useState, useRef } from "react";
import { socket } from "../../socket";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { IoCheckmarkDone, IoCheckmarkOutline, IoCallOutline, IoSendSharp, IoChevronBackOutline } from "react-icons/io5";

type Props = {
    isShowSect: boolean;
    setIsShowSect: (isShowSect: boolean) => void;
    // otherId: string;
};
type Message = { 
    _id: string; 
    senderId: string; 
    receiverId: string; 
    text: string; 
    createdAt: string;
    deliveredAt?: string | null;
    readAt?: string | null;
};

export default function messageSect({ isShowSect, setIsShowSect }: Props) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [text, setText] = useState("");
    
    const chatForm = useRef<HTMLFormElement>(null);

    const otherId = "user_id";

    // Load old messages when the chat opens
    useEffect(() => {
        fetch(`http://localhost:5000/api/messages/${otherId}`, { credentials: "include" })
            .then((res) => res.json())
            .then(setMessages);
    }, [otherId]);

    // Open the connection and listen for new messages
    useEffect(() => {
        socket.connect();

        function markRead() {
            if (document.visibilityState === "visible") {
                socket.emit("mark_read", { from: otherId });
            }
        }

        function onNewMessage(msg: Message) {
            if (msg.senderId === otherId || msg.receiverId === otherId) {
                setMessages((prev) => [...prev, msg]);
            }
            if (msg.senderId === otherId) markRead(); // chat is open, so they've seen it
        }

        function onDelivered({ to, deliveredAt }: { to: string; deliveredAt: string }) {
            if (to !== otherId) return;
            setMessages((prev) =>
                prev.map((m) => (m.receiverId === to && !m.deliveredAt ? { ...m, deliveredAt } : m))
            );
        }

        function onRead({ by, readAt }: { by: string; readAt: string }) {
            if (by !== otherId) return;
            setMessages((prev) =>
                prev.map((m) =>
                    m.receiverId === by && !m.readAt
                        ? { ...m, readAt, deliveredAt: m.deliveredAt ?? readAt }
                        : m
                )
            );
        }

        socket.on("new_message", onNewMessage);
        socket.on("messages_delivered", onDelivered);
        socket.on("messages_read", onRead);
        document.addEventListener("visibilitychange", markRead);
        markRead(); // opening the chat counts as reading what's there

        return () => {
            socket.off("new_message", onNewMessage);
            socket.off("messages_delivered", onDelivered);
            socket.off("messages_read", onRead);
            document.removeEventListener("visibilitychange", markRead);
            socket.disconnect();
        };
    }, [otherId]);

    function sendMessage(e: React.FormEvent) {
        e.preventDefault();
        if (!text.trim()) return;
        socket.emit("send_message", { to: otherId, text });
        setText("");
    }

    function formatTime(iso: string) {
        return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    }
    function statusTicks( m: Message ) {
        if (m.readAt) return "read";
        if (m.deliveredAt) return "delivered";
        return "sent";
    }

    return (
        <>
            <div className={`w-full h-[7%] md:h-[10%] p-5 mb-2 flex items-center justify-between text-(--primary-text) cursor-pointer bg-(--surface-bg)`}>
                <div className='flex items-center space-x-4'>
                    <IoChevronBackOutline className={`lg:hidden text-(--primary-text) hover:text-(--main) text-2xl mx-auto mr-3 cursor-pointer`} onClick={() => setIsShowSect(false)} />
                    <img className='rounded-full' src="/profile.webp" alt="" width={"40px"} />
                    <h4 className='font-semibold text-lg md:text-xl'>Name</h4>
                </div>
                <div className='flex items-center space-x-10'>
                    <IoCallOutline className={`text-(--primary-text) hover:text-(--main) text-xl mx-auto cursor-pointer`} />
                    <IoMdMore className={`text-(--primary-text) hover:text-(--main) text-3xl ml-5 cursor-pointer`} />
                </div>
            </div>
            <div className='w-full h-[77%] relative'>
                <div className='w-full h-fit max-h-full px-3 pb-3 sticky top-full overflow-y-scroll no-scrollbar'>
                    {messages.map((m) => (
                        // <p key={m._id}>{m.senderId === otherId ? "Them" : "Me"}: {m.text}</p>
                        <TextBubble id={m._id} text={m.text} senderId={m.senderId} otherId={otherId} time={formatTime(m.createdAt)} ticks={statusTicks(m)}  />
                    ))}
                    
                </div>
                <FaArrowDownLong className={`hidden absolute bottom-5 right-5 p-1.5 w-7 h-7 rounded-full text-white text-xs md-text-base bg-(--accent)`} />
            </div>
            <form ref={chatForm} className={`mx-auto md:ml-5 w-[95%] max-h-18 bg-(--surface-bg) text-(--primary-text) rounded-md flex items-center`} onSubmit={sendMessage}>
                <textarea style={{resize: 'none'}} className='p-3 w-full focus:outline-none focus:ring-0' placeholder='Type your message ...' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        chatForm.current?.requestSubmit();
                    }
                }} />
                <IoSendSharp className={`w-[10%] md:w-[5%] h-full p-1 mr-3 text-(--main) rounded-md cursor-pointer`} onClick={() => chatForm.current?.requestSubmit()} />
            </form>
        </>
    )
}
type bubbleInfo = {
    id: string;
    text: string;
    senderId: string;
    otherId: string;
    time: string;
    ticks: string;
}
function TextBubble({id, text, senderId, otherId, time, ticks}: bubbleInfo) {
    return(
        <>
        {senderId === otherId ? (
            <div className='relative rounded-md w-fit my-5 px-3 py-1 bg-(--main) text-white text-sm md:text-base'>{text}  {ticks == 'read' ? (
                <span className='absolute top-full right-0 text-(--accent) cursor-pointer' title="Delivered"><IoCheckmarkDone/></span> 
            ) : ticks == 'delivered' ? (
                <span className='absolute top-full right-0 text-(--grey-400) cursor-pointer' title="Read"><IoCheckmarkDone/></span> 
            ) : (
                <span className='absolute top-full right-0 text-(--grey-400) cursor-pointer' title="Sent"><IoCheckmarkOutline/></span> 
            )}
            <span className=' absolute top-full left-0 text-xs opacity-60'>{time}</span></div>
        ):(
            <div key={id} className={`rounded-md sticky left-full w-fit my-5 px-3 py-1 bg-(--surface-bg) text-(--primary-text) text-sm md:text-base`}>{text}  {ticks == 'read' ? (
                <span className='absolute top-full right-0 text-(--accent) cursor-pointer' title="Delivered"><IoCheckmarkDone/></span> 
            ) : ticks == 'delivered' ? (
                <span className='absolute top-full right-0 text-(--grey-400) cursor-pointer' title="Read"><IoCheckmarkDone/></span> 
            ) : (
                <span className='absolute top-full right-0 text-(--grey-400) cursor-pointer' title="Sent"><IoCheckmarkOutline/></span> 
            )}
            <span className=' absolute top-full left-0 text-xs opacity-60'>{time}</span></div>
        )}
        </>
    )
}