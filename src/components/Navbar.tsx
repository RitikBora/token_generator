import { Coins, Menu } from "lucide-react"
import { Button } from "./ui/button"

export const NavBar = () =>
{
    return(
        <nav className="flex items-center justify-between p-4 bg-black bg-opacity-50 backdrop-blur-md text-sky-200">
        <div className="flex items-center space-x-2">
          <Coins className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold">Web3 Token Gen</span>
        </div>
      </nav>

    )
}