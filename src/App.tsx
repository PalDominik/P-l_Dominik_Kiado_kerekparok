import { useEffect, useState } from 'react'
import KerekparLista from './components/KerekparLekerdezes'
import Kerekpar from './components/Kerekpar';


function App() {
  
  const kerekparlista = KerekparLista()

  let kerekparok_szama = 0;
  let legolcsobb_kerekpar = kerekparlista[0].napiDij;
  let legdragabb_kerekpar = kerekparlista[0].napiDij;

  kerekparlista.map(k => (
    (kerekparok_szama += 1, legolcsobb_kerekpar = (legolcsobb_kerekpar > k.napiDij)? k.napiDij : legolcsobb_kerekpar, legdragabb_kerekpar = (legdragabb_kerekpar < k.napiDij)? k.napiDij : legdragabb_kerekpar  )
  ))

  return <>
    <h1>Kiadó-Kerékpárok</h1>
    <h2>Statisztikák:</h2>
    <p>Kerékpárok száma:{kerekparok_szama}</p>
    <p>Legolcsobb kerékpár dija:{legolcsobb_kerekpar}</p>
    <p>Legdrágább kerékpár dija:{legdragabb_kerekpar}</p>
    <hr />
    <Kerekpar></Kerekpar>

  </>
}



export default App
