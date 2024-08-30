'use client'
import { Plus } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
 
const cupons = [
  {
    code: "B2CW3H25F",
    description: "teste",
    num_uses: 0,
    status: "ATIVO",
  },
]
 
export function Cupons() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Label htmlFor="email">Procurar: </Label>
            <Input type="email" id="email" placeholder="" className="rounded-lg p-0.5 w-48" />
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex gap-2 font-bold">
                  <Plus className="h-4 w-4" />
                  <span>
                    Cadastrar Cupom
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-black">
                <DialogHeader className="mb-4">
                  <DialogTitle>Cadastrar Cupom</DialogTitle>
                </DialogHeader>

                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="status">Status</Label>
                    <Switch
                        id="status"
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="code">Código</Label>
                  <div className="flex w-full max-w-sm items-center">
                    <Input type="text" id="code" placeholder="" className="border border-rose-50 rounded-none p-1" />
                    <Button size="sm" className="rounded-none font-bold">
                      Gerar
                    </Button>
                  </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="description">Descrição</Label>
                  <Input type="text" id="description" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="total_cupons">Total de cupons disponíveis</Label>
                  <Input type="text" id="total_cupons" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="min_value">Valor mínimo de compra</Label>
                  <Input type="text" id="min_value" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex w-48 flex-col gap-1.5">
                    <Label htmlFor="min_value">Data de início</Label>
                    <Input type="date" id="min_value" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                  </div>
                  <div className="flex w-48 flex-col gap-1.5">
                    <Label htmlFor="min_value">Data de término</Label>
                    <Input type="date" id="min_value" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                  </div>
                </div>


                <div className="mb-4">
                  <p>
                    <span className="font-bold"> Desconto aplicado apenas no valor dos produtos. </span> <br/>
                    Não consideramos o valor do frete.
                  </p>
                </div>

                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="destructive">
                      Close
                    </Button>
                  </DialogClose>
                  <Button type="submit" className="rounded-lg font-bold">
                      Cadastrar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Nº de Utilização</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cupons.map((cupom, id) => (
              <TableRow key={id}>
                <TableCell>{cupom.code}</TableCell>
                <TableCell>{cupom.description}</TableCell>
                <TableCell>{cupom.num_uses}</TableCell>
                <TableCell>{cupom.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    </>
  )
}