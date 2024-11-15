import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import './index.css'
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
      <ToastContainer/>
    </RecoilRoot>
  </StrictMode>,
)
