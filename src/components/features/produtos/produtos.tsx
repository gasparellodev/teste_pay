'use client'

import { Beer, Camera, Check, Plus, StickyNote } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function ProductsPage() {
  return (
    <>
      <form className="flex">
        <section className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-4">
            Nome do produto
            <Input className="nt-2 border-rose-50" />
            <div className="flex justify-between">
              <button className="align-center flex gap-2 text-red-600">
                <Beer />
                Apagar produto
              </button>
              <button className="align-center text-white-600 w-30 flex h-auto gap-2 rounded-md bg-lime-500 p-1">
                <Check />
                Salvar
              </button>
            </div>
            Codigo do produto
            <Input className="nt-2 border-rose-50" />
            <div className="flex justify-start gap-5">
              <button className="align-center text-white-600 w-30 flex h-auto gap-2 rounded-md bg-sky-700 p-1">
                <StickyNote />
                Limpar
              </button>
              <button className="align-center text-white-600 w-30 flex h-auto gap-2 rounded-md bg-cyan-500 p-1">
                <Plus />
                Incluir Variante
              </button>
            </div>
          </div>

          <div className="mb-[1.8rem] grid w-full max-w-sm items-center gap-1.5 border-none">
            <Label htmlFor="picture" className="flex flex-col gap-2">
              Picture
              <Input
                id="picture"
                type="file"
                className="h-8 border-dashed pb-10 pt-10"
              />
            </Label>
            <button className="align-center text-white-600 w-30 mt-11 flex h-auto gap-2 rounded-md bg-cyan-500 p-1">
              <Camera />
              Atualizar imagem
            </button>
          </div>
        </section>
      </form>
    </>
  )
}
