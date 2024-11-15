import { Coins, Droplet } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ActiveTabAtom, isConnectionRequiredAtom } from "@/recoil/Atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import {motion} from 'framer-motion'


export const TokenGenerator = () =>
{
   
    const [activeTab , setActiveTab] = useRecoilState(ActiveTabAtom);
    const setIsConnectionRequired = useSetRecoilState(isConnectionRequiredAtom);

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
                <motion.div className="text-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1 , ease:"easeOut"}}
                >

                    <Coins className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h2 className="text-2xl font-bold mb-4 text-blue-300">Token Generator</h2>
                    <p className="mb-4 text-blue-200">Create your custom Web3 token here.</p>
                    <Button onClick={() => {console.log("***********") ,setIsConnectionRequired(true)}} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Generate Token</Button>
                </motion.div>
                </TabsContent>
                <TabsContent value="airdrop" className="mt-8">
                <motion.div className="text-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1 , ease:"easeOut"}}
                >
                    <Droplet className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h2 className="text-2xl font-bold mb-4 text-blue-300">SOL Airdrop Faucet</h2>
                    <p className="mb-4 text-blue-200">Receive SOL tokens for testing and development.</p>
                    <Button onClick={() => {console.log("***********") , setIsConnectionRequired(true)}} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Request SOL</Button>
                </motion.div>
                </TabsContent>
            </Tabs>
            </div>
        </section>
    ) 
}