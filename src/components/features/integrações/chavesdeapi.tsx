import { Plus } from 'lucide-react'

export function ChavesDeApi() {
  return (
    <>
      <div className="flex h-auto w-full justify-between">
        {/* <p>
          Você já gerou uma chave de API, o ID KEY é:
          9320249092644306590700707165 (apenas exemplo)
        </p> */}
        <div>
          <p>Você ainda não gerou uma KEY</p>
        </div>
        <button className="flex gap-2 rounded bg-green-400 p-2">
          <Plus />
          Gerar chave de API
        </button>
      </div>
    </>
  )
}
