import { Hero } from "./Hero"
import { CtaForm } from "./CtaForm"
import { useSetRecoilState } from "recoil"
import { ActiveTabAtom} from "@/recoil/Atoms"



export const HomePage = () =>
{
  
    const setActiveTab = useSetRecoilState(ActiveTabAtom);
    const scrollToGenerator = (activeTab : string) => {

        setActiveTab(activeTab);
        const element = document.getElementById('generator-section')
        element?.scrollIntoView({ behavior: "smooth"})
    }


    return(
        <div>
            <div className="flex flex-col gap-32">
                <Hero scrollToGenerator={scrollToGenerator}/>
                <CtaForm/>
            </div>
        </div>
    )
}