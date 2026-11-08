import { useEffect, useState } from "react";
import { socket } from "../socket";
import { getJson } from "../api";
import { Blobatar } from "@blobatar/react";
import UserCard from "./sections/searchSect";

type Person = { id: string; username: string };

type OnlineUsersProps = {
    onPick: (id: string, username: string) => void;
};

export default function OnlineUsers({ onPick }: OnlineUsersProps) {
    const [online, setOnline] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        let timer: ReturnType<typeof setTimeout> | undefined;

        async function load() {
            try {
                const data = await getJson("http://localhost:5000/api/online");
                if (!cancelled) setOnline(data);
            } catch {
                if (!cancelled) setOnline([]);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        // wait half a second so a burst of changes causes one request
        function scheduleLoad() {
            clearTimeout(timer);
            timer = setTimeout(load, 500);
        }

        load();
        socket.on("presence_changed", scheduleLoad);
        socket.on("connect", load); // refresh after the socket (re)connects

        return () => {
            cancelled = true;
            clearTimeout(timer);
            socket.off("presence_changed", scheduleLoad);
            socket.off("connect", load);
        };
    }, []);

    return (
        <section className="mt-5">
            <h3 className="text-(--primary-text)">
                Online now {online.length > 0 && <span className="text-(--accent)">({online.length})</span>}
            </h3>

            {loading && <p className="p-4 text-sm opacity-60">Loading...</p>}
            {!loading && online.length === 0 && (
                <p className="p-4 text-sm opacity-60">Nobody else is online right now</p>
            )}
            <div className="mt-3 w-full flex space-x-3 overflow-x-scroll no-scrollbar">
                {online.map((p) => (
                    <div key={p.id} className="relative rounded-md hover:bg-(--surface-bg-hover) cursor-pointer" onClick={() => onPick(p.id, p.username)}>
                        <Blobatar name={p.username} width={"100px"} />
                        <p className="absolute bottom-2 right-3 w-5 h-5 bg-green-500 border-2 border-(--surface-bg) rounded-full"></p>
                    </div>
                ))}
            </div>
        </section>
    );
}