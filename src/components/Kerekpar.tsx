import { useState } from "react"
import KerekparLista from "./KerekparLekerdezes"


function KKartyak(){
    const kerekparok = KerekparLista();
    const [mutat,setMutat] = useState(kerekparok);
    return <>
    <h2>Kerékpárok</h2>
    {
      kerekparok.map((k) => (
        <div className="card" >
          <div className="card-header">
            <h3>{k.nev}</h3>
          </div>

          <div style={{color: k.szin}} className="card-body">
            <p>Típusa: <em>{k.tipus}</em></p>
            <p>Ára: <span style={{textDecoration: "underline, dotted"}}>{k.napiDij}</span></p><br />
          </div>
            <button className="btn btn-info" onClick={() => setMutat(
              kerekparok.filter(f => f.id !== k.id)
            )}>toggle</button>

        </div>
      ))
    }
    </>
}

export default KKartyak