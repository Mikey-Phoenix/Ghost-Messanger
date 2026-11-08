// userId -> how many sockets (tabs/devices) that user has open
const counts = new Map<string, number>();

// returns true if this was the user's first connection (they just came online)
export function userConnected(id: string): boolean {
    const next = (counts.get(id) ?? 0) + 1;
    counts.set(id, next);
    return next === 1;
}

// returns true if that was the user's last connection (they just went offline)
export function userDisconnected(id: string): boolean {
    const next = (counts.get(id) ?? 1) - 1;
    if (next <= 0) {
        counts.delete(id);
        return true;
    }
    counts.set(id, next);
    return false;
}

export function getOnlineIds(): string[] {
    return [...counts.keys()];
}