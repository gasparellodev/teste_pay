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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
 
const upsells = [
  {
    name: "Teste",
    when_offer: "NO CHECKOUT",
    status: "ATIVO",
  },
]
 
export function Upsell() {  
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Label htmlFor="email">Procurar: </Label>
            <Input type="email" id="email" placeholder="" className="rounded-lg p-0.5  w-48" />
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex gap-2 font-bold">
                  <Plus className="h-4 w-4" />
                  <span>
                    Cadastrar Upsell
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-black">
                <DialogHeader className="mb-4">
                  <DialogTitle>Cadastrar Upsell</DialogTitle>
                </DialogHeader>
                
                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="status">Status</Label>
                    <Switch
                        id="status"
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Nome do Upsell</Label>
                  <Input type="text" id="name" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="min_value">Ao comprar o poduto...</Label>
                    <Select defaultValue="teste">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecione um produto" />
                        </SelectTrigger>
                        <SelectContent className="bg-rose-50 text-black font-bold">
                            <SelectItem value="teste">Produto Teste</SelectItem>
                            <SelectItem value="teste2">Produto Teste 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="min_value">Oferecer o produto...</Label>
                    <Select defaultValue="teste">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecione um produto" />
                        </SelectTrigger>
                        <SelectContent className="bg-rose-50 text-black font-bold">
                            <SelectItem value="teste">Produto Teste</SelectItem>
                            <SelectItem value="teste2">Produto Teste 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full max-w-sm items-center gap-2.5 mb-4">
                    <Label htmlFor="min_value">Quando Oferecer</Label>
                    <RadioGroup defaultValue="checkout" className="flex justify-between items-center">
                        <div className="flex items-center space-x-2 border border-rose-50 p-4 rounded-md">
                            <RadioGroupItem value="checkout" id="r1" />
                            <Label htmlFor="r1">NO CHECKOUT <br />(antes da compra)</Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-rose-50 p-4 rounded-md">
                            <RadioGroupItem value="finalizacao" id="r2" />
                            <Label htmlFor="r2">
                                NA FINALIZAÇÃO <br />
                                (depois da compra)
                            </Label>
                        </div>
                    </RadioGroup>
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
              <TableHead>Nome</TableHead>
              <TableHead>Quando Oferecer</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upsells.map((upsell, id) => (
              <TableRow key={id}>
                <TableCell>{upsell.name}</TableCell>
                <TableCell>{upsell.when_offer}</TableCell>
                <TableCell>{upsell.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}