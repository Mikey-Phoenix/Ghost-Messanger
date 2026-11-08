import { randomInt } from "node:crypto";

const adjectives = ["happy", "swift", "brave", "calm", "bright", "clever", "gentle", "lucky"];
const nouns = ["lion", "river", "falcon", "panda", "comet", "maple", "tiger", "ocean"];

export function generateUsername(): string {
    const adjective = adjectives[randomInt(adjectives.length)];
    const noun = nouns[randomInt(nouns.length)];
    const number = randomInt(1000, 10000); // 4 digits
    return `${adjective}${noun}${number}`;
}