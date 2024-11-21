import { atom } from "recoil";

const ActiveTabAtom = atom({
    key: "ActiveTabAtom",
    default: "token"
})

const IsConnectionRequiredAtom = atom({
    key: "IsConnectionRequiredAtom",
    default: true
})

const IsGeneratingTokenAtom = atom({
    key: "IsGeneratingTokenAtom",
    default: false
})

const TokenGenerationStatusAtom = atom<"idle" | "loading" | "success" | "error">({
    key: "TokenGenerationStatusAtom",
    default: "idle"
})


export {ActiveTabAtom , IsConnectionRequiredAtom , IsGeneratingTokenAtom , TokenGenerationStatusAtom};