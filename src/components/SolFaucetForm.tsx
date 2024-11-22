import { useState } from "react";
import {motion} from "framer-motion";
import { Coins, Droplet, Wallet } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSetRecoilState } from "recoil";
import { AirdropStatusAtom, IsRequestingAirdropAtom } from "@/recoil/Atoms";
import {submitAirdropRequest } from "@/utils/faucetUtils";


export const SolFaucetForm = () =>
{
    const [solanaAddress , setSolanaAddress] = useState(""); 
    const [solAmount , setSolAmount] = useState("");

    const setIsRequestingAirdrop = useSetRecoilState(IsRequestingAirdropAtom);
    const setAirdropStatus = useSetRecoilState(AirdropStatusAtom);

    const onFormSubmit = async() =>
    {
      setIsRequestingAirdrop(true);
      setAirdropStatus('loading');

      const {success}  = await submitAirdropRequest("DEVNET" , solAmount , solanaAddress);
      if(success)
      {
        setAirdropStatus("success");
      }else
      {
        setAirdropStatus("error");
      }
     
    }

    return(
        <motion.div className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Droplet className="h-16 w-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-bold mb-4 text-blue-300">SOL Testnet Faucet</h2>
            <p className="mb-4 text-blue-200">Get free SOL tokens for your testing and development needs.</p>
             <form onSubmit={(event) => {
              event.preventDefault();
             }} className="space-y-6 max-w-md mx-auto">
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
                <Button onClick={onFormSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Request SOL
                </Button>
             </form>
        </motion.div>
    )
}



