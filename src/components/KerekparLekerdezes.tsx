import { useEffect, useState } from "react"

type KerekPar = {
  id: number
  nev: string
  tipus:string
  napiDij:number
  szin:string
}

function KerekparLista(){

  const [kerekpar, setKerekparok] = useState<KerekPar[]>([]);
  useEffect(() => {
    async function kerekparLekerdezes() {
      try{
        const valasz = await fetch("./kerekparok.json")
        if(!valasz.ok) throw new Error("Fetch Bajok vannak: " + valasz.status)
        const kerekparok : KerekPar[] = await valasz.json();
        setKerekparok(kerekparok)
      }catch (err){
        console.log(`Anyú.. baj van: ${err}`)
      }
    }
    kerekparLekerdezes()
  },  [])

  return kerekpar

}

export default KerekparLista