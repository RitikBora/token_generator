import { Dialog, DialogContent } from "./ui/dialog"
import { CheckCircle, Loader2, XCircle } from "lucide-react"
import { Button } from "./ui/button"
import { useRecoilState } from "recoil"
import { AirdropStatusAtom, IsRequestingAirdropAtom } from "@/recoil/Atoms"

export const FaucetStatusDialog = () =>
{
    const [isRequestingAirdrop , setIsRequestingAirdrop] = useRecoilState(IsRequestingAirdropAtom);
    const [airdropStatus , setAirdropStatus] = useRecoilState(AirdropStatusAtom);

    return(
    <Dialog open={isRequestingAirdrop} onOpenChange={() => {
        setIsRequestingAirdrop(false)
        setAirdropStatus('idle')
      }}>
        <DialogContent className="bg-blue-950 border border-blue-800 text-blue-100 sm:max-w-md">
          <div className="text-center p-6">
            {airdropStatus === 'loading' && (
              <div className="space-y-4">
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-400" />
                <p className="text-lg font-semibold text-blue-300">Requesting Airdrop...</p>
                <p className="text-sm text-blue-200">Please wait while we process your SOL airdrop request.</p>
              </div>
            )}
            {airdropStatus === 'success' && (
              <div className="space-y-4">
                <CheckCircle className="h-12 w-12 mx-auto text-green-400" />
                <p className="text-lg font-semibold text-green-300">Airdrop Successful!</p>
                <p className="text-sm text-blue-200">Your SOL tokens have been sent to your wallet.</p>
                <Button onClick={() => {
                  setIsRequestingAirdrop(false)
                  setAirdropStatus('idle')
                }} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Close
                </Button>
              </div>
            )}
            {airdropStatus === 'error' && (
              <div className="space-y-4">
                <XCircle className="h-12 w-12 mx-auto text-red-400" />
                <p className="text-lg font-semibold text-red-300">Airdrop Request Failed</p>
                <p className="text-sm text-blue-200">There was an error processing your airdrop request. Please try again.</p>
                <Button onClick={() => {
                  setIsRequestingAirdrop(false)
                  setAirdropStatus('idle')
                }} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Close
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
}