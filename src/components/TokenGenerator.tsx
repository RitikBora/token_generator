import { Coins, Droplet } from "lucide-react"
import { Button } from "./ui/button"
import { Switch } from "./ui/switch"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";


export const TokenGenerator = ({ handleAction} : {handleAction: () => void}) =>
{
   
    const [activeTab , setActiveTab] = useState("token");

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
                <div className="text-center">
                    <Coins className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h2 className="text-2xl font-bold mb-4 text-blue-300">Token Generator</h2>
                    <p className="mb-4 text-blue-200">Create your custom Web3 token here.</p>
                    <Button onClick={handleAction} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Generate Token</Button>
                </div>
                </TabsContent>
                <TabsContent value="airdrop" className="mt-8">
                <div className="text-center">
                    <Droplet className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h2 className="text-2xl font-bold mb-4 text-blue-300">SOL Airdrop Faucet</h2>
                    <p className="mb-4 text-blue-200">Receive SOL tokens for testing and development.</p>
                    <Button onClick={handleAction} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Request SOL</Button>
                </div>
                </TabsContent>
            </Tabs>
            </div>
        </section>
    ) 
}