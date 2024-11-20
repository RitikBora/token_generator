import { Coins,Droplet, Wallet } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ActiveTabAtom} from "@/recoil/Atoms";
import { useRecoilState } from "recoil";
import {motion} from 'framer-motion'
import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { TokenGenarationForm } from "./TokenGeneratorForm";




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



const SolFaucetForm = () =>
{
    const [solanaAddress , setSolanaAddress] = useState(""); 
    const [solAmount , setSolAmount] = useState("");

    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Droplet className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">SOL Testnet Faucet</h2>
            <p className="mb-4 text-blue-200">Get free SOL tokens for your testing and development needs.</p>
             <form onSubmit={() => {}} className="space-y-6 max-w-md mx-auto">
                 <div className="space-y-2">
                  <Label htmlFor="solanaAddress" className="text-left block text-blue-300">Solana Address</Label>
                  <div className="relative">
                    <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                    <Input
                      id="solanaAddress"
                      type="text"
                      placeholder="Enter Solana address"
                      value={solanaAddress}
                      onChange={(e) => setSolanaAddress(e.target.value)}
                      className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400 pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="solAmount" className="text-left block text-blue-300">SOL Amount</Label>
                  <div className="relative">
                    <Coins className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                    <Input
                      id="solAmount"
                      type="number"
                      step="0.000000001"
                      min="0"
                      placeholder="Enter SOL amount"
                      value={solAmount}
                      onChange={(e) => setSolAmount(e.target.value)}
                      className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400 pl-10"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Request SOL
                </Button>
             </form>
        </motion.div>
    )
}



