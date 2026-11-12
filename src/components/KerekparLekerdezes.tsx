import { useEffect, useState } from "react"
import Kerekpar from "./Kerekpar"
import type { KerekPar } from "./Kerekpar"

function KerekparLista() {
  const [kerekparok, setKerekparok] = useState<KerekPar[]>([])

  useEffect(() => {
    async function kerekparLekerdezes() {
      try {
        const valasz = await fetch("/kerekparok.json")
        if (!valasz.ok) throw new Error("Fetch hiba: " + valasz.status)
        const adatok: KerekPar[] = await valasz.json()
        setKerekparok(adatok)
      } catch (err) {
        console.log(`Hiba a betöltéskor: ${err}`)
      }
    }
    kerekparLekerdezes()
  }, [])

  const dijak = kerekparok.map((k) => k.napiDij)
  const legolcsobb = dijak.length > 0 ? Math.min(...dijak) : 0
  const legdragabb = dijak.length > 0 ? Math.max(...dijak) : 0

  return (
    <>
      <h2>Statisztikák</h2>
      <p>Kerékpárok száma: {kerekparok.length}</p>
      <p>Legolcsóbb kerékpár bérleti díja: {legolcsobb} Ft / nap</p>
      <p>Legdrágább kerékpár bérleti díja: {legdragabb} Ft / nap</p>
      <hr />

      
        {kerekparok.map((k) => (
          <Kerekpar key={k.id} kerekpar={k} />
        ))}
    
    </>
  )
}

export default KerekparLista