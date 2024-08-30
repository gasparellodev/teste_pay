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
  DialogOverlay
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
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
 
const orderBumps = [
  {
    name: "Teste Order Bump",
    payment_method: "Cartão de crédito",
    status: "ATIVO",
  },
]
 
export function OrderBump() {  
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
                    Cadastrar Order Bump
                  </span>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md bg-black overflow-y-scroll max-h-[95vh]">
                <DialogHeader className="mb-4">
                  <DialogTitle>Cadastrar Order Bump</DialogTitle>
                </DialogHeader>

                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="status">Status</Label>
                    <Switch
                        id="status"
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Nome do Order bump</Label>
                  <Input type="text" id="name" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-4 mb-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="min_value" className="text-lg">Quando oferecer</Label>
                      <Select defaultValue="teste">
                          <SelectTrigger className="">
                              <SelectValue placeholder="Selecione um produto" />
                          </SelectTrigger>
                          <SelectContent className="bg-rose-50 text-black font-bold">
                              <SelectItem value="teste">Produto Teste</SelectItem>
                              <SelectItem value="teste2">Produto Teste 2</SelectItem>
                          </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex w-42 flex-col gap-1.5">
                        <Label htmlFor="sell_price">Preço Venda</Label>
                        <Input type="text" id="sell_price" placeholder="" className="rounded-sm p-0.5" />
                        <p className="text-xs"><span className="font-bold">Obs.:</span> R$ 0,00 = Grátis.</p>
                      </div>
                      <div className="flex w-42 flex-col gap-1.5">
                        <Label htmlFor="promocial_price">Preço Promocional (opcional)</Label>
                        <Input type="text" id="promocial_price" placeholder="" className="rounded-sm p-0.5" />
                        <p className="text-xs"><span className="font-bold">Obs.:</span> R$ 0,00 ou valor maior que o preço de venda = O preço promocional não será aplicado.</p>
                      </div>
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-2 mb-2">
                    <p className="font-bold mb-2 text-lg">Personalizar</p>
                    <div className="flex w-42 flex-col gap-1.5">
                      <Label htmlFor="button_text">Texto do botão (CTA)</Label>
                      <Input type="text" id="button_text" placeholder="" className="rounded-sm p-0.5" />
                    </div>
                    <div className="flex w-42 flex-col gap-1.5">
                      <Label htmlFor="title">Título</Label>
                      <Input type="text" id="title" placeholder="" className="rounded-sm p-0.5" />
                    </div>
                    <div className="flex w-42 flex-col gap-1.5">
                      <Label htmlFor="message">Mensagem (opcional)</Label>
                      <Textarea placeholder="" id="message" />
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-2 mb-2">
                    <p className="font-bold mb-2 text-lg">Meio de pagamento</p>
                    <div className="flex w-42 flex-col gap-2.5">
                      <Label htmlFor="show_order_bumps_shopping_with">Mostra order bump para compras com</Label>
                      <Select defaultValue="all">
                          <SelectTrigger className="">
                              <SelectValue placeholder="Selecione um meio de pagamento" />
                          </SelectTrigger>
                          <SelectContent className="bg-rose-50 text-black font-bold">
                              <SelectItem value="all">Todos os meios de pagamento</SelectItem>
                              <SelectItem value="credit_card">Cartão de crédito</SelectItem>
                              <SelectItem value="ticket">Boleto bancário</SelectItem>
                              <SelectItem value="pix">Pix</SelectItem>
                          </SelectContent>
                      </Select>
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-2 mb-2">
                    <p className="font-bold mb-2 text-lg">Regras</p>
                    <div className="flex w-42 flex-col gap-2.5">
                      <Label htmlFor="show_order_bumps_shopping_with">Tipo de regras</Label>
                      <Select defaultValue="always">
                          <SelectTrigger className="">
                              <SelectValue placeholder="Selecione um tipo de regra" />
                          </SelectTrigger>
                          <SelectContent className="bg-rose-50 text-black font-bold">
                              <SelectItem value="always">Sempre mostrar</SelectItem>
                              <SelectItem value="specific">Produtos específicos</SelectItem>
                          </SelectContent>
                      </Select>
                    </div>
                    <p className="text-xs">
                      <span className="font-bold">Sempre mostrar</span> = o order bump será oferecido em todas as compras. <br />
                      <span className="font-bold">Produtos específicos</span> = o order bump será oferecido quando houver no checkout ao menos um dos produtos adicionados.
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
              <TableHead>Nome</TableHead>
              <TableHead>Meio de pagamento</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderBumps.map((orderBump, id) => (
              <TableRow key={id}>
                <TableCell>{orderBump.name}</TableCell>
                <TableCell>{orderBump.payment_method}</TableCell>
                <TableCell>{orderBump.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}