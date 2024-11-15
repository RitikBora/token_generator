import { atom } from "recoil";

const ActiveTabAtom = atom({
    key: "ActiveTabAtom",
    default: "token"
})

const IsConnectionRequiredAtom = atom({
    key: "IsConnectionRequiredAtom",
    default: true
})

const IsModalOpenAtom = atom({
    key: "IsModalOpenAtom",
    default: false
})
export {ActiveTabAtom , IsConnectionRequiredAtom , IsModalOpenAtom};