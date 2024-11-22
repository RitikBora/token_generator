import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { Coins, DollarSign, ImageIcon } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createToken } from "@/utils/tokenUtils";
import { useSetRecoilState } from "recoil";
import { IsGeneratingTokenAtom, TokenGenerationStatusAtom } from "@/recoil/Atoms";
import { TokenStatusDialog } from "./TokenStatusDialog";
import { Dialog } from "@radix-ui/react-dialog";




export const TokenGenarationForm = () =>
{
    const wallet = useWallet();
    // @ts-ignore
    const {publicKey , signTransaction , sendTransaction} = wallet;
   

    useEffect(() =>
    {
      setIsConnectionRequired(!wallet.connected);
    } , [wallet])


    const [isConnectionRequired , setIsConnectionRequired] = useState(true);
    
    
    const [tokenName, setTokenName] = useState('')
    const [tokenSymbol, setTokenSymbol] = useState('')
    const [tokenImageUrl, setTokenImageUrl] = useState('')
    const [tokenInitialSupply, setTokenInitialSupply] = useState('')
    const [isHovered, setIsHovered] = useState(false);

  const  setIsGeneratingToken = useSetRecoilState(IsGeneratingTokenAtom);
  const  setTokenGenerationStatus = useSetRecoilState(TokenGenerationStatusAtom);


    const onFormSubmit = async () =>
    {
      setIsGeneratingToken(true);
      setTokenGenerationStatus("loading");
      
      const {success} = await createToken({tokenName , tokenSymbol , tokenImageUrl , tokenInitialSupply , publicKey , sendTransaction , signTransaction});

      if(success)
      {
        setTokenGenerationStatus("success");
      }else
      {
        setTokenGenerationStatus("error");
      }
    }

    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Coins className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Launch Your Crypto Token</h2>
   {
               isConnectionRequired ? <div className="space-y-4">
                     <p className="mb-4 text-blue-200">Effortlessly generate and customize your very own crypto coin with our intuitive platform. Simply connect your wallet and take your first step into the world of decentralized finance!</p>
                      <div 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                      <WalletMultiButton style={{
                        backgroundColor: isHovered ? '#1d4ed8' : '#2563eb', 
                        color: 'white',
                        fontWeight: '600',
                        transition: 'background-color 0.1s',
                        padding: '0px 40px' 
                      }}
                     />
                      </div>
                    </div>  :
                    <div>
                       <form onSubmit={(event) =>
                 {
                  event.preventDefault();
                  
                 }}className="space-y-6 max-w-md mx-auto">
                    <div className="space-y-2">
                      <Label htmlFor="tokenName" className="text-left block text-blue-300">Token Name</Label>
                      <div className="relative">
                        <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                        <Input
                          id="tokenName"
                          type="text"
                          placeholder="Enter token name"
                          value={tokenName}
                          onChange={(e) => setTokenName(e.target.value)}
                          className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400 pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tokenSymbol" className="text-left block text-blue-300">Token Symbol</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                        <Input
                          id="tokenSymbol"
                          type="text"
                          placeholder="Enter token symbol"
                          value={tokenSymbol}
                          onChange={(e) => setTokenSymbol(e.target.value)}
                          className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400 pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tokenImageUrl" className="text-left block text-blue-300">Token Image URL</Label>
                      <div className="relative">
                        <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                        <Input
                          id="tokenImageUrl"
                          type="url"
                          placeholder="Enter image URL"
                          value={tokenImageUrl}
                          onChange={(e) => setTokenImageUrl(e.target.value)}
                          className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400 pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tokenInitialSupply" className="text-left block text-blue-300">Initial Supply</Label>
                      <div className="relative">
                        <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                        <Input
                          id="tokenInitialSupply"
                          type="number"
                          placeholder="Enter initial supply"
                          value={tokenInitialSupply}
                          onChange={(e) => setTokenInitialSupply(e.target.value)}
                          className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400 pl-10"
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" onClick={onFormSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      Create Token
                    </Button>
                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <WalletMultiButton style={{
                        backgroundColor: isHovered ? '#1d4ed8' : '#2563eb', 
                        color: 'white',
                        fontWeight: '600',
                        transition: 'background-color 0.1s',
                        padding: '0px 40px', 
                      }}
                     />
                    </div>
                    
                    
                  </form>
                    
                    </div>
                  
            }
        </motion.div>
    )
}