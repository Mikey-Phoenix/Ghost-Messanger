import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Preloader from "../preloader"

export default function ProtectedRoute() {
    const [status, setStatus] = useState<"loading" | "in" | "out">("loading");

    useEffect(() => {
        fetch("http://localhost:5000/api/me", { credentials: "include" })
            .then((res) => setStatus(res.ok ? "in" : "out"))
            .catch(() => setStatus("out"));
    }, []);

    if (status === "loading") return <Preloader />;
    if (status === "out") return <Navigate to="/sign-in" replace />;
    return <Outlet />;
}