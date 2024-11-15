import { Coins, DollarSign, Droplet, ImageIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ActiveTabAtom, IsConnectionRequiredAtom, IsModalOpenAtom } from "@/recoil/Atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {motion} from 'framer-motion'
import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";



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
    const isConnectionRequired = useRecoilValue(IsConnectionRequiredAtom);
    const  setIsModalOpen = useSetRecoilState(IsModalOpenAtom)
    
    const [tokenName, setTokenName] = useState('')
    const [tokenSymbol, setTokenSymbol] = useState('')
    const [tokenImageUrl, setTokenImageUrl] = useState('')
    const [tokenInitialSupply, setTokenInitialSupply] = useState('')

    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Coins className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Create Your Token</h2>
            <p className="mb-4 text-blue-200">Easily generate your custom Web3 token in just a few clicks.</p>
            {
               isConnectionRequired ? <Button onClick={() => { setIsModalOpen(true) }} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Start Token Creation
                </Button>  :
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
                  </form>
            }
        </motion.div>
    )
}

const SolFaucetForm = () =>
{
    const  setIsModalOpen = useSetRecoilState(IsModalOpenAtom);
    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Droplet className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">SOL Testnet Faucet</h2>
            <p className="mb-4 text-blue-200">Get free SOL tokens for your testing and development needs.</p>
            <Button onClick={() => { setIsModalOpen(true) }} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Claim Free SOL
            </Button>
        </motion.div>
    )
}



