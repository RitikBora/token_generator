import { useState } from "react"
import { Hero } from "./Hero"
import { TokenGenerator } from "./TokenGenerator"
import { useSetRecoilState } from "recoil"
import { ActiveTabAtom } from "@/recoil/Atoms"

export const HomePage = () =>
{
    
    const [isWalletConnected, setIsWalletConnected] = useState(false)
    const [publicKey, setPublicKey] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const setActiveTab = useSetRecoilState(ActiveTabAtom);

    const scrollToGenerator = (activeTab : string) => {
        setActiveTab(activeTab);
        const element = document.getElementById('generator-section')
        element?.scrollIntoView({ behavior: "smooth"})
    }

    const handleAction = () => {
        if (!isWalletConnected) {
        setIsModalOpen(true)
        } else {
        // Perform action based on current mode (generate token or request airdrop
        }
    }

    const handleConnectWallet = () => {
        if (publicKey.trim() !== '') {
        setIsWalletConnected(true)
        setIsModalOpen(false)
        }
    }

    return(
        <div className="flex flex-col gap-32">
            <Hero scrollToGenerator={scrollToGenerator}/>
            <TokenGenerator handleAction={handleAction}/>
        </div>
    )
}