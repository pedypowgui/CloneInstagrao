// Vite + React
import { useState } from 'react'

// Estilos
import "./App.css";

// Componentes
import LateralEsquerda from "./LateralEsquerda/LateralEsquerda";
import Principal from "./Principal/Principal";
import LateralDireita from "./LateralDireita/LateralDireita";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LateralEsquerda/>
      <Principal/>      
      <LateralDireita/>
    </div>
  )
}
