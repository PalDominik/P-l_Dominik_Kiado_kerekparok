import { useState } from "react"

export type KerekPar = {
  id: number
  nev: string
  tipus: string
  napiDij: number
  szin: string
}

type KerekparProps = {
  kerekpar: KerekPar
}

function Kerekpar({ kerekpar }: KerekparProps) {
  const [reszletek, setReszletek] = useState<boolean>(true)

  return (
      <div className="card">
        <div className="card-body">
          <h3 style={{ color: kerekpar.szin }}>{kerekpar.nev}</h3>
          {reszletek && (
            <>
              <p>
                <em>{kerekpar.tipus}</em>
              </p>
              <p style={{textDecoration: "underline solid"}}>
                {kerekpar.napiDij} Ft / nap
              </p>
            </>
          )}
          <button
            className="btn btn-info"
            onClick={() => setReszletek(!reszletek)}
          >
            részletek
          </button>
        </div>
      </div>

  )
}

export default Kerekpar