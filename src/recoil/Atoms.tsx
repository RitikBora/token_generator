import { atom } from "recoil";

const ActiveTabAtom = atom({
    key: "ActiveTabAtom",
    default: "token"
})

export {ActiveTabAtom};