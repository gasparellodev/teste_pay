"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
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
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'

type Props = React.HTMLAttributes<HTMLDivElement>

export function OrdersList({ className, ...props }: Props) {
  return (
    <div className={cn('', className)} {...props}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">ID</TableHead>
            <TableHead className="w-[180px]">Realizado há</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead className="w-[140px]">Status</TableHead>
            <TableHead className="w-[140px]">Total do pedido</TableHead>
            <TableHead className="w-[140px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <TableRow key={i} className="bg-white dark:bg-zinc-800">
                <TableCell className="font-mono text-xs font-medium">
                  821e78f7asdhdf128h
                </TableCell>
                <TableCell className="text-muted-foreground">
                  há 15 minutos
                </TableCell>
                <TableCell className="font-medium">
                  Diego Schell Fernandes
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="text-muted-foreground font-medium">
                      Pendente
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">R$ 149,90</TableCell>
                <TableCell className="font-medium">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="font-bold">
                        <Eye className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-black">
                      <DialogHeader className="mb-4">
                        <DialogTitle className="text-2xl">Visualizar Pedido</DialogTitle>
                      </DialogHeader>

                      <div>
                        <h4 className="text-xl font-bold"> Informações </h4>
                        <ul className="p-3">
                          <li> Status da Compra: <span className="font-bold">aprovado</span> </li>
                          <li> Valor Bruto: <span className="font-bold">R$ 331,00</span> </li>
                          <li> Frete: <span className="font-bold">Gratis</span> </li>
                          <li> Meio de pagamento: <span className="font-bold">cartão de crédito</span> </li>
                          <li> Número Cartão: <span className="font-bold">**** **** **** 1238</span> </li>
                          <li> Parcelas: <span className="font-bold">1</span> </li>
                          <li> Bandeira: <span className="font-bold">Master</span> </li>
                          <li> Valor Disponível: <span className="font-bold">R$ 213,46</span> </li>
                          <li> Data Disponível: <span className="font-bold">01/08/2024 20:09</span> </li>
                          <li> Valor Retido: <span className="font-bold">R$ 82,75</span> </li>
                          <li> Data para liberar saldo retido: <span className="font-bold">27/10/2024 20:09</span> </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold"> Cliente </h4>
                        <ul className="p-3">
                          <li> Nome: <span className="font-bold">Flavio Ermani</span> </li>
                          <li> Telefone: <span className="font-bold">(99) 99999-9999</span> </li>
                          <li> E-mail: <span className="font-bold">email_teste@gmail.com</span> </li>
                          <li> Endereço: <span className="font-bold">Rua Teste 300 - Bairro Teste, Cidade SP</span> </li>
                          <li> Idioma: <span className="font-bold">PT</span> </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold"> Produto </h4>
                        <ul className="p-3">
                          <li> 1: <span className="font-bold">Kit 2 Poltronas Giratória - AninhaDecor0 - 1 x 331,00 = 331,00</span> </li>
                          <li> Total: <span className="font-bold">331,00</span> </li>
                        </ul>
                      </div>

                      <div className="grid w-full max-w-sm items-center gap-2.5">
                        <Label htmlFor="rastreio">Rastreio</Label>
                        <div className="flex w-full max-w-sm items-center">
                          <Input type="text" id="rastreio" placeholder="" className="rounded-none p-1 focus-visible:ring-0" />
                          <Button size="sm" className="rounded-r-lg rounded-l-none font-bold">
                            Atualizar Rastreio
                          </Button>
                        </div>
                      </div>

                      <DialogFooter className="sm:justify-start mt-4">
                        <DialogClose asChild>
                          <Button type="button" variant="destructive">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
