export async function getJson(url: string) {
    const res = await fetch(url, { credentials: "include" });
    const type = res.headers.get("content-type") || "";

    if (!type.includes("application/json")) {
        throw new Error(`Server returned a non-JSON response (${res.status}) for ${url}`);
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
}