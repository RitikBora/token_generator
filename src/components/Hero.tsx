
import { HoverImages } from "./HoverImages"
import { Button } from "./ui/button"


export const Hero = () =>{

  
  
  
    const scrollToGenerator = () => {
        const element = document.getElementById('generator-section')
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <section className="container mx-auto px-4 py-20 text-center max-w-4xl">
        <div className="w-max-xl mx-auto ">
          <HoverImages/>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
          Create Your Web3 Token
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">Generate custom tokens or receive SOL airdrops with our easy-to-use platform.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToGenerator} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Generate Token
          </Button>
          <Button onClick={scrollToGenerator} size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-800 hover:text-white">
            SOL Airdrop
          </Button>
        </div>
      </section>
    )
}


