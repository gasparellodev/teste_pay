'use client'

import {
  AlertCircle,
  BadgeDollarSign,
  Copy,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  RotateCw,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import pixIcon from '../../../../public/pixIcon.svg'

const transactions = [
  {
    creationDate: '2024-07-25',
    amountWithdrawn: '$200.00',
    status: 'Pending',
    notes: 'Initial withdrawal request',
    transactionCode: 'TRX001',
  },
  {
    creationDate: '2024-07-26',
    amountWithdrawn: '$300.00',
    status: 'Completed',
    notes: 'Completed withdrawal',
    transactionCode: 'TRX002',
  },
]

export function Finance() {
  const [isHidden, setIsHidden] = useState(true)
  const [isTableHidden, setIsTableHidden] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [amount, setAmount] = useState('')
  const [selectedOption, setSelectedOption] = useState('CNPJ')

  const copyToClipboard = ({ text }: { text: string }): void => {
    navigator.clipboard.writeText(text)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove the "R$" prefix before setting the value
    setAmount(e.target.value.replace(/^R\$/, ''))
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className="mx-auto flex w-full flex-col gap-5 xl:flex-row">
        <section className="flex w-full flex-col gap-10 sm:w-auto">
          <div className="relative h-[17rem] w-full rounded-xl bg-blue-600 pl-5 pr-5 pt-5 sm:w-[17rem]">
            <div className="flex items-center justify-between">
              <p className="text-start text-white">Saldo total</p>
              <button
                onClick={() => window.location.reload()}
                className="absolute right-5 top-5 flex items-center justify-center rounded-full bg-white p-2 text-blue-600"
              >
                <RotateCw size={20} />
              </button>
            </div>
            <hr className="mb-[.5rem] mt-[2rem]" />
            <h2 className="font-bold">{isHidden ? 'R$ ******' : 'R$ 0,00'}</h2>
            <p>
              <span className="inline-flex items-center">
                <span className="mr-2 block h-3 w-3 rounded-full bg-green-500"></span>
                {isHidden ? 'R$ ****** disponível' : 'R$ 0,00 disponível'}
              </span>
            </p>
            <p>
              <span className="inline-flex items-center">
                <span className="mr-2 block h-3 w-3 rounded-full bg-gray-500"></span>
                {isHidden ? 'R$ ****** a receber' : 'R$ 0,00 á receber'}
              </span>
            </p>
            <p>
              <span className="inline-flex items-center">
                <span className="mr-2 block h-3 w-3 rounded-full bg-orange-500"></span>
                {isHidden ? 'R$ ******' : 'R$ 0,00'}
                <a href="#" className="pl-[5px]">
                  colchão financeiro
                </a>
              </span>
            </p>

            <button
              onClick={() => setIsHidden(!isHidden)}
              className="absolute bottom-5 right-5 flex items-center justify-center rounded-full bg-white p-2 text-blue-600"
            >
              {isHidden ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative h-[8rem] w-full rounded-xl border border-gray-500 pl-5 pr-5 pt-5 sm:w-[17rem]">
            <p>
              <span className="inline-flex items-center text-gray-500">
                Tipo de chave
              </span>
            </p>
            <p>
              <span className="inline-flex items-center">CNPJ</span>
            </p>
            <p>
              <span className="inline-flex items-center text-gray-500">
                Chave PIX
              </span>
            </p>
            <div className="flex items-center">
              <span className="inline-flex flex-grow items-center">
                20664608000128
              </span>
              <button
                onClick={() => copyToClipboard({ text: '20664608000128' })}
                className="ml-2 mt-[-20px] flex items-center justify-center rounded-full bg-white p-2 text-gray-600"
              >
                <Copy size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex h-[2.2rem] w-full gap-2 rounded-xl bg-blue-500 p-1 text-center text-white sm:w-[17rem]">
                  <BadgeDollarSign />
                  Solicitar saque bancário
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Solicitar Saque Bancário</DialogTitle>
                  <DialogDescription>
                    Saldo disponível <br />
                    R$ 0,00
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="amount" className="text-gray-700">
                      Valor do saque
                    </Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        R$
                      </span>
                      <Input
                        id="amount"
                        value={amount}
                        onChange={handleChange}
                        className="border-gray-300 pl-8"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-black"></div>
                      <p>Valor mínimo de saque: R$ 10,00.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-black"></div>
                      <p>1º Saque do dia gratuito, demais saques: R$ 5,00.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-black"></div>
                      <p>
                        O saque solicitado analisa suas vendas e seus rastreios,
                        quanto mais seguro e em dia sua conta estiver, mais
                        rápido será aprovado o saque.
                      </p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Solicitar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex h-[2.2rem] w-full justify-center gap-2 rounded-xl border border-gray-500 p-1 text-white sm:w-[17rem]">
                  <Image src={pixIcon} alt="" />
                  Gerenciar chave PIX
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Cadastrar/Alterar chave PIX</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="pix-type" className="text-gray-700">
                      Tipo de chave
                    </Label>
                    <select
                      id="pix-type"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="rounded-md border border-gray-300 p-2"
                    >
                      <option value="CNPJ">CNPJ</option>
                      <option value="email">e-mail</option>
                      <option value="evp">EVP</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>
        <section
          className={`w-full ${isExpanded ? 'relative h-screen' : 'relative'}`}
        >
          <div
            id="table-container"
            className={`relative ${isExpanded ? 'h-full w-full' : 'w-full'}`}
          >
            <div className="absolute right-5 top-5 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsTableHidden(!isTableHidden)}
                className="flex items-center justify-center rounded-full bg-white p-2 text-blue-600"
              >
                {isTableHidden ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            <Table
              className={`transition-all ${isExpanded ? 'h-full w-full' : 'w-full'} ${isExpanded ? 'overflow-auto' : ''}`}
            >
              <TableHeader>
                <TableRow>
                  <TableHead>Dt. Criação</TableHead>
                  <TableHead>Valor sacado</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Observações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="py-4 text-center">
                      <div className="flex items-center justify-center text-gray-500">
                        <AlertCircle size={20} className="mr-2" />
                        Sem dados disponíveis
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  transactions.map((transaction) => (
                    <TableRow key={transaction.transactionCode}>
                      <TableCell>
                        {isTableHidden ? '****' : transaction.creationDate}
                      </TableCell>
                      <TableCell>
                        {isTableHidden ? '****' : transaction.amountWithdrawn}
                      </TableCell>
                      <TableCell>
                        {isTableHidden ? '****' : transaction.status}
                      </TableCell>
                      <TableCell>
                        {isTableHidden ? '****' : transaction.notes}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </>
  )
}
