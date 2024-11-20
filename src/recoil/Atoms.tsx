import { atom } from "recoil";

const ActiveTabAtom = atom({
    key: "ActiveTabAtom",
    default: "token"
})

const IsConnectionRequiredAtom = atom({
    key: "IsConnectionRequiredAtom",
    default: true
})


export {ActiveTabAtom , IsConnectionRequiredAtom};