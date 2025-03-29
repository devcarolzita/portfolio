import './App.css'
import Home from './pages/Home'
import SplashCursor from './components/SplashCursor/SplashCursor'
import { initGA, logPageView } from "./analytics";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initGA(); // Inicializa o Google Analytics
    logPageView(); // Registra a primeira página acessada
  }, []);
  return (
    <>
    <SplashCursor />
      <Home />
    </>
  )
}

export default App
