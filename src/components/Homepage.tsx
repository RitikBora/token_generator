import { useState } from "react"
import { Hero } from "./Hero"
import { TokenGenerator } from "./TokenGenerator"
import { useRecoilState, useSetRecoilState } from "recoil"
import { ActiveTabAtom, isConnectionRequiredAtom } from "@/recoil/Atoms"
import { ConnectWalletDialog } from "./ConnectWalletDialog"
import { PublicKey } from '@solana/web3.js';
import { showErrorMessage } from "@/utils/toastMessages"


export const HomePage = () =>
{
    
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [isConnectionRequired , setIsConnectionRequired] = useRecoilState(isConnectionRequiredAtom)
    // const [publicKey, setPublicKey] = useState('')

    const setActiveTab = useSetRecoilState(ActiveTabAtom);

    const scrollToGenerator = (activeTab : string) => {
        if(!isWalletConnected )
        {
            setIsConnectionRequired(true);
        }
        setActiveTab(activeTab);
        const element = document.getElementById('generator-section')
        element?.scrollIntoView({ behavior: "smooth"})
    }



    const handleFormSubmit= (solanaAddress : string) => {
        setIsConnectionRequired(false);
        if (solanaAddress.trim() !== '') {
            
            try
            {
                const publicKey = new PublicKey(solanaAddress);
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
            {isConnectionRequired && <ConnectWalletDialog isConnectionRequired setIsConnectionRequired={setIsConnectionRequired} handleFormSubmit={handleFormSubmit}/> }
        </div>
    )
}