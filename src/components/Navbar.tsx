import { Coins } from "lucide-react"

export const NavBar = () =>
{
    return(
        <nav className="sticky top-0 flex items-center justify-between p-4  bg-opacity-50 backdrop-blur-md text-sky-200">
        <div className="flex items-center space-x-2">
          <Coins className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold">Web3 Token Gen</span>
        </div>
      </nav>

    )
}