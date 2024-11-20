import { Coins, DollarSign, Droplet, ImageIcon, Wallet } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ActiveTabAtom, IsConnectionRequiredAtom} from "@/recoil/Atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {motion} from 'framer-motion'
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Label } from "@radix-ui/react-label";
import { useWalletModal, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";



export const TokenGenerator = () =>
{
   
    const [activeTab , setActiveTab] = useRecoilState(ActiveTabAtom);
    

    return(
        <section id="generator-section" className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto bg-blue-950 bg-opacity-50 backdrop-blur-md rounded-lg p-8 shadow-lg border border-blue-800">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8 ">
                <TabsList className="grid w-full grid-cols-2 bg-blue-800 rounded-lg h-10">
                    <TabsTrigger value="token" className="text-gray-400 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-black rounded-s-lg">
                        Token Generator
                    </TabsTrigger>
                    <TabsTrigger value="airdrop" className="text-gray-400 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-black rounded-e-lg">
                        SOL Airdrop
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="token" className="mt-8">
                    <TokenGenarationForm/>
                </TabsContent>
                <TabsContent value="airdrop" className="mt-8">
                    <SolFaucetForm/>
                </TabsContent>
            </Tabs>
            </div>
        </section>
    ) 
}

const TokenGenarationForm = () =>
{
     const { connection } = useConnection();
    const wallet = useWallet();

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
    const [isHovered2 , setIsHovered2] = useState(false);

    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Coins className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Launch Your Crypto Coin</h2>
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
                 <form onSubmit={() => {}} className="space-y-6 max-w-md mx-auto">
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
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
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
            }
        </motion.div>
    )
}

const SolFaucetForm = () =>
{
    
    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Droplet className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">SOL Testnet Faucet</h2>
            <p className="mb-4 text-blue-200">Get free SOL tokens for your testing and development needs.</p>
            <Button onClick={() => {}} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Claim Free SOL
            </Button>
        </motion.div>
    )
}



