import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { DialogHeader } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"

export const ConnectWalletDialog = (setIsWalletConnected : React.Dispatch<React.SetStateAction<boolean>>) =>
{
     
    const [publicKey, setPublicKey] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

      const handleConnectWallet = () => {
    if (publicKey.trim() !== '') {
      setIsWalletConnected(true)
      setIsModalOpen(false)
    }
  }
    return(
         <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-blue-900 border border-blue-700 text-blue-100">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-300">Connect Wallet</DialogTitle>
            <DialogDescription className="text-blue-200">
              Please enter your public key to connect your wallet.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <Input
              type="text"
              placeholder="Enter your public key"
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
              className="bg-blue-800 border-blue-700 text-blue-100 placeholder-blue-400"
            />
            <Button onClick={handleConnectWallet} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Connect Wallet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
}