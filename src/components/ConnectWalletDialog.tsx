import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SetStateAction, useState } from "react"

export const ConnectWalletDialog = ({ isConnectionRequired, setIsConnectionRequired, handleFormSubmit }: { isConnectionRequired: boolean, setIsConnectionRequired: React.Dispatch<SetStateAction<boolean>>, handleFormSubmit: (solanaAddress: string) => void }) => {
  const [solanaAddress, setSolanaAddress] = useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  return (
    <Dialog open={isConnectionRequired} onOpenChange={setIsConnectionRequired}>
      <DialogContent className="bg-blue-950 border border-blue-800 text-blue-100 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-300">Wallet Connection</DialogTitle>
          <DialogDescription className="text-blue-200">
            Select a method to access your wallet.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-300">Use Wallet Adapter</h2>
            <Button onClick={() => {}} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Proceed with Wallet Adapter
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-blue-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-blue-950 px-2 text-blue-400">Or</span>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-blue-300">Enter Solana Address</h2>
            <Input
              type="text"
              placeholder="e.g., 9eKD6...8FHJL"
              value={solanaAddress}
              onChange={(e) => setSolanaAddress(e.target.value)}
              className="bg-blue-900 border-blue-700 text-blue-100 placeholder-blue-400"
            />
            <Button onClick={() => handleFormSubmit(solanaAddress)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Submit Solana Address
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
