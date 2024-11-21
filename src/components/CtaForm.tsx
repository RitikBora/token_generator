import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ActiveTabAtom} from "@/recoil/Atoms";
import { useRecoilState } from "recoil";
import { TokenGenarationForm } from "./TokenGeneratorForm";
import { SolFaucetForm } from "./SolFaucetForm";




export const CtaForm = () =>
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



