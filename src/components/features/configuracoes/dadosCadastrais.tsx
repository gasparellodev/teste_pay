import { Camera, Check, Files, Pencil, Search } from 'lucide-react' // Certifique-se de importar o ícone correto
import React from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = React.HTMLAttributes<HTMLDivElement>

export function DadosCadastrais({ className, ...props }: Props) {
  return (
    <div className="flex w-full flex-wrap">
      <div className="flex w-full flex-col justify-center gap-4">
        <div className="relative flex w-full items-center">
          <div className="flex w-full flex-col">
            ID da conta
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              disabled
              {...props}
            />
          </div>
          <button className="flex w-12 items-center justify-center">
            <Files size={25} className="mt-5" color="#fff" />
          </button>
        </div>

        <div className="relative flex h-auto w-full items-center justify-start gap-5">
          <div className="flex w-[50%] flex-col">
            Nome da Conta
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
          </div>
          <div className="items flex w-[50] flex-col">
            CPF/CNPJ
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              disabled
              {...props}
            />
          </div>
          <button className="mt-[1.2rem] flex justify-center">
            <Pencil size={25} className="" color="#fff" />
          </button>
        </div>
        <div className="relative flex w-full items-center">
          <div className="flex w-full flex-col">
            Web Site
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
          </div>
        </div>
        <div className="relative flex w-full items-center gap-5">
          <div className="flex w-full flex-col">
            E-mail de Suporte (opcional)
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
            <p className="text-[.8125rem]">
              Esta informação é utilizada na comunicação com seus clientes e
              afeta positivamente a saúde da sua conta.
            </p>
          </div>
          <div className="flex w-full flex-col">
            Telefone de Suporte (opcional)
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
            <p className="text-[.8125rem]">
              {' '}
              Esta informação é utilizada na comunicação com seus clientes e
              afeta positivamente a saúde da sua conta.
            </p>
          </div>
        </div>
        <div className="relative flex w-full items-center">
          <div className="flex w-full flex-col">
            Endereço Selecionado
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
          </div>
        </div>
        <div className="relative flex w-full items-center gap-5">
          <div className="flex w-full flex-col">
            CEP
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
          </div>
          <button className="flex w-12 items-center justify-center">
            <Search size={25} className="mt-5" color="#fff" />
          </button>
          <div className="flex w-full flex-col">
            Número
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
          </div>
          <div className="flex w-full flex-col">
            <p className="align-start">Complemento</p>
            <label
              htmlFor="input"
              className="absolute left-3 top-2 origin-top-left -translate-y-3 scale-75 transform text-sm text-white transition-transform peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-gray-900"
            ></label>
            <input
              className="peer mb-1 h-10 w-full rounded-md border border-white bg-transparent px-3 py-2.5 text-white placeholder-transparent focus:border-white focus:outline-none"
              placeholder=" "
              id="input"
              {...props}
            />
          </div>
        </div>
        <div className="flex">
          <Label htmlFor="picture" className="flex flex-col gap-5 text-base">
            Trocar Imagem
            <Input
              id="picture"
              type="file"
              className=""
            />
          </Label>
        </div>

        <div className="flex justify-between mt-8">
          <Button size="sm" className="rounded-md font-bold" variant="destructive">
            Excluir conta
          </Button>

          <Button size="sm" className="rounded-md font-bold">
            Salvar
          </Button>
        </div>
      </div>
    </div>
  )
}
