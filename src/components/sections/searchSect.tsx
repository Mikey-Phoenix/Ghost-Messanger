import { useState, useEffect } from 'react';
import { getJson } from "../../api";
import { Blobatar } from "@blobatar/react"
import Preloader from "../preloader";
import OnlineUsers from "../onlineUsers";
import { IoPersonAddOutline, IoChatbubbleOutline, IoSearchOutline, IoFilterOutline, IoChevronBackOutline } from "react-icons/io5";
import { surfaceBg, surfaceBgHover, primaryText, accent, accentHover, main } from "../../theme/themeVars";


type Props = {
    isShowSect: boolean;
    setIsShowSect: (isShowSect: boolean) => void;
    setSelected: (s: { id: string; username: string }) => void;
    changeSect: (sect: string) => void;
} 
type Person = { id: string; username: string; email: string  };

export default function searchSearch({isShowSect, setIsShowSect, setSelected, changeSect}: Props) {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Person[] | null>(null);

    const searching = query.trim().length >= 2;

    type Selected = { id: string; username: string };

    function selectUser(id: string, username: string) {
        setSelected({ id, username }); // remember who was picked
        changeSect("messages/show");   // open the messages section
        setQuery("");                  // clear the search box
    }

    // const [selected, setSelected] = useState<Selected | null>(null);

    // function selectUser(id: string, username: string) {
    //     setSelected({ id, username }); // same as onSelect: remember who was picked
    //     changeSect("messages/show");   // open the messages section
    //     setQuery("");                  // clear the search box
    // }

    // function pick(id: string, username: string) {
    //     selectUser(id, username); // open the chat with this person
    //     setQuery("");           // clear the search box and go back to the conversation list
    // }

    useEffect(() => {
        const q = query.trim();

        if (q.length < 2) {
            setResults(null);
            return;
        }

        let cancelled = false;

        // wait 300ms after the last keystroke before asking the server
        const timer = setTimeout(async () => {
            try {
                const data = await getJson(
                    `http://localhost:5000/api/users/search?q=${encodeURIComponent(q)}`
                );
                if (!cancelled) setResults(data);
                console.log(results);
            } catch {
                if (!cancelled) setResults([]);
            }
        }, 300);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [query]);

    return(
        <div className="h-full overflow-y-scroll no-scrollbar">
            
            <div className={`w-full h-[7%] md:h-[10%] md:p-5 mb-7 flex items-center justify-between text-(--main) cursor-pointer bg-(--surface-bg)`}>
                <div className='px-4 font-semibold text-xl flex items-center space-x-5'><span className={`lg:hidden text-(--primary-text) hover:text-(--main)`} onClick={() => setIsShowSect(false)}><IoChevronBackOutline /></span><h4>Discover</h4></div>
            </div>

            <div className={`w-[90%] pl-2 mx-auto my-5 bg-(--surface-bg-hover) flex items-center space-x-2 rounded-md`}>
                <IoSearchOutline className={`text-(--primary-text) text-2xl md:text-3xl`} />
                <input className='w-full rounded-md p-2 focus:outline-none focus:ring-0' type="text" placeholder='Search persons' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            <h1 className={`w-[90%] mx-auto text-xl md:text-3xl text-(--primary-text) flex items-center space-x-3`}><p>Filters</p> <IoFilterOutline /> </h1>

            <div className="w-[90%] mx-auto my-5 flex items-center space-x-3 md:space-x-10">
                <button className="py-1 px-2 md:py-2 md:px-4 flex items-center space-x-2 bg-(--main) hover:bg-(--main) text-white text-xs md:text-lg rounded-md cursor-pointer">Near me</button>
                <button className={`py-1 px-2 md:py-2 md:px-4 border text-(--primary-text) text-xs md:text-base rounded-md cursor-pointer`}>Online</button>
                <button className={`py-1 px-2 md:py-2 md:px-4 border text-(--primary-text) text-xs md:text-base rounded-md cursor-pointer`}>Friends</button>
            </div>

            <div className="w-[90%] md:w-[80%] mx-auto">

                {searching ? (
                    <>
                        {results === null &&<div className='relative w-full min-h-100'><Preloader background={"(--surface-bg)/0"} /></div>}
                        {results?.length === 0 && <div className='w-full h-full p-4 text-(--grey-400) flex items-center justify-center'>No users found</div>}
                        {results?.map((p) => (
                            <UserCard key={p.id} id={p.id} username={p.username} email={p.email} onAdd={selectUser} />
                        ))}
                    </>
                ) : (
                    <>
                        {/* your existing loading, error, empty-state and conversations list */}
                    </>

                )}
                

            </div>

            <div className="w-[90%] mx-auto">
                <OnlineUsers onPick={selectUser}/>
            </div>
            

        </div>
    )
}


type UserCardProps = {
    id: string;
    username: string;
    email?: string;
    mutual?: number;
    onAdd: (id: string, username: string) => void;
    // onAdd: (id: string, name: string) => void;
};

export function UserCard({ id, username, email, mutual, onAdd }: UserCardProps) {
    return (
        <div className={`relative w-full px-5 py-3 mt-3 bg-(--surface-bg) flex items-center justify-evenly rounded-md`}>
            <div className="w-full flex flex-wrap md:flex-nowrap items-center">
                <Blobatar name={username || "unknown"} width={"100px"} />
                <div className={`w-full md:pl-5 text-(--primary-text)`}>
                    <h1 className="text-lg md:text-2xl truncate">{username}</h1>
                    <p className="text-xs md:text-sm">
                        <span className="text-(--accent)">@{email}</span>
                        {mutual !== undefined && (
                            <>
                                {" | "}
                                <span>{mutual}</span> mutual ghosts
                            </>
                        )}
                    </p>
                </div>
            </div>
            <button
                type="button"
                onClick={() => { onAdd(id, username), console.log("clicked") }}
                className={`absolute top-10 right-5 md:relative py-2 px-4 flex items-center space-x-2 bg-(--main) text-white text-xs md:text-sm rounded-md cursor-pointer`}
            >
                <IoPersonAddOutline />
                <p>Add</p>
            </button>
        </div>
    );
}