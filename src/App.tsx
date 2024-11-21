
import './App.css'
import { HomePage } from './components/Homepage'
import { NavBar } from './components/Navbar'
import { TokenStatusDialog } from './components/TokenStatusDialog'


function App() {


  return (
    <div className='w-full min-h-screen  bg-gradient-to-br from-black via-blue-950 to-blue-900'>
      <NavBar/>
      <HomePage/>
      <TokenStatusDialog/>
    </div>
  )
}

export default App
