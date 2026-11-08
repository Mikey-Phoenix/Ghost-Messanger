import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Preloader from "../preloader"
import { API_URL } from "../../config";
export default function ProtectedRoute() {
    const [status, setStatus] = useState<"loading" | "in" | "out">("loading");

    useEffect(() => {
        fetch(`${API_URL}/api/me`, { credentials: "include" })
            .then((res) => setStatus(res.ok ? "in" : "out"))
            .catch(() => setStatus("out"));
    }, []);

    if (status === "loading") return <Preloader background="(--surface-bg)"/>;
    if (status === "out") return <Navigate to="/sign-in" replace />;
    return <Outlet />;
}