import { useEffect, useState } from "react"
import { Hero } from "./Hero"
import { TokenGenerator } from "./TokenGenerator"
import { useRecoilState, useSetRecoilState } from "recoil"
import { ActiveTabAtom, IsConnectionRequiredAtom, IsModalOpenAtom } from "@/recoil/Atoms"
import { ConnectWalletDialog } from "./ConnectWalletDialog"
import { PublicKey } from '@solana/web3.js';
import { showErrorMessage } from "@/utils/toastMessages"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"


export const HomePage = () =>
{
    
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [isConnectionRequired , setIsConnectionRequired] = useRecoilState(IsConnectionRequiredAtom)
    const [isModalOpen , setIsModalOpen] = useRecoilState(IsModalOpenAtom);
    // const [publicKey, setPublicKey] = useState('')

    const setActiveTab = useSetRecoilState(ActiveTabAtom);

    const scrollToGenerator = (activeTab : string) => {
        if(isConnectionRequired && activeTab === 'token')
        {
            setIsModalOpen(true);
        }
        setActiveTab(activeTab);
        const element = document.getElementById('generator-section')
        element?.scrollIntoView({ behavior: "smooth"})
    }



    const handleFormSubmit= (solanaAddress : string) => {
        setIsModalOpen(false);
        if (solanaAddress.trim() !== '') {
            
            try
            {
                const publicKey = new PublicKey(solanaAddress);
                setIsConnectionRequired(false);
            }catch(err)
            {
                showErrorMessage("Invalid Solana Address!")
            }
        }
    }

    return(
        <div>
            <div className="flex flex-col gap-32">
                <Hero scrollToGenerator={scrollToGenerator}/>
                <TokenGenerator/>
            </div>
        </div>
    )
}