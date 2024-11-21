
import { CheckCircle, Loader2, XCircle } from "lucide-react"
import { Button } from "./ui/button"
import { useRecoilState} from "recoil"
import { IsGeneratingTokenAtom, TokenGenerationStatusAtom } from "@/recoil/Atoms"
import { Dialog, DialogContent } from "./ui/dialog"

export const TokenStatusDialog = () =>
{
    const [isGeneratingToken , setIsGeneratingToken] = useRecoilState(IsGeneratingTokenAtom);
    const [tokenGenerationStatus , setTokenGenerationStatus] = useRecoilState(TokenGenerationStatusAtom);


    const closeTokenGenerationDialog = () =>
    {
         setIsGeneratingToken(false);
         setTokenGenerationStatus("idle");
    }
    return(
        <Dialog open={isGeneratingToken} onOpenChange={closeTokenGenerationDialog}>
        <DialogContent className="bg-blue-950 border border-blue-800 text-blue-100 sm:max-w-md">
          <div className="text-center p-6">
            {tokenGenerationStatus === 'loading' && (
              <div className="space-y-4">
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-400" />
                <p className="text-lg font-semibold text-blue-300">Generating Token...</p>
                <p className="text-sm text-blue-200">Please wait while we create your custom token.</p>
              </div>
            )}
            {tokenGenerationStatus === 'success' && (
              <div className="space-y-4">
                <CheckCircle className="h-12 w-12 mx-auto text-green-400" />
                <p className="text-lg font-semibold text-green-300">Token Generated Successfully!</p>
                <p className="text-sm text-blue-200">Your custom token has been created and is ready to use.</p>
                <Button onClick={closeTokenGenerationDialog} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Close
                </Button>
              </div>
            )}
             {tokenGenerationStatus === 'error' && (
              <div className="space-y-4">
                <XCircle className="h-12 w-12 mx-auto text-red-400" />
                <p className="text-lg font-semibold text-red-300">Token Generation Failed</p>
                <p className="text-sm text-blue-200">There was an error creating your token. Please try again.</p>
                <Button onClick={closeTokenGenerationDialog} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Close
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
} 