import { atom } from "recoil";

const ActiveTabAtom = atom({
    key: "ActiveTabAtom",
    default: "token"
})

const isConnectionRequiredAtom = atom({
    key: "IsConnectionRequiredAtom",
    default: false
})
export {ActiveTabAtom , isConnectionRequiredAtom};