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


const IsRequestingAirdropAtom = atom({
    key: "IsRequestingAirdropAtom",
    default: false
})

const AirdropStatusAtom = atom<"idle" | "loading" | "success" | "error">({
    key: "AirdropStatusAtom",
    default: "idle"
})


export {ActiveTabAtom , IsConnectionRequiredAtom , IsGeneratingTokenAtom , TokenGenerationStatusAtom , IsRequestingAirdropAtom , AirdropStatusAtom};