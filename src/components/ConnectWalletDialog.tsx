import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SetStateAction, useState } from "react"
import { Wallet } from 'lucide-react'

export const ConnectWalletDialog = ({ isModalOpen, setIsModalOpen, handleFormSubmit }: { isModalOpen: boolean, setIsModalOpen: React.Dispatch<SetStateAction<boolean>>, handleFormSubmit: (solanaAddress: string) => void }) => {
  const [solanaAddress, setSolanaAddress] = useState('')
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  return (
     <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogContent className="bg-blue-950 border border-blue-800 text-blue-100 sm:max-w-md">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-blue-300">Connect Your Wallet</DialogTitle>
  <DialogDescription className="text-blue-200">
    To mint your crypto coin and establish ownership, please connect your wallet.
  </DialogDescription>
    </DialogHeader>
    <div className="mt-6 space-y-4">
      <div className="p-4 bg-blue-900 rounded-lg text-center">
        <Wallet className="h-12 w-12 mx-auto mb-4 text-blue-400" />
        <p className="text-sm text-blue-200 mb-4">
          Click below to connect using our secure wallet adapter.
        </p>
        <Button onClick={() => {}} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
          Connect Wallet
        </Button>
      </div>
      <p className="text-xs text-blue-400 text-center">
        By connecting, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  </DialogContent>
</Dialog>

  )
}
