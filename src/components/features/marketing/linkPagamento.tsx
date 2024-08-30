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
 
const payment_links = [
  {
    description: "Teste Link de Pagamento",
    link: "https://google.com",
    status: "ATIVO",
  },
]
 
export function LinkPagamento() {  
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
                    Cadastrar Link de Pagamento
                  </span>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md bg-black">
                <DialogHeader className="mb-4">
                  <DialogTitle>Cadastrar Link de Pagamento</DialogTitle>
                </DialogHeader>

                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="status">Status</Label>
                    <Switch
                        id="status"
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-2.5">
                  <Label htmlFor="description">Descrição (Opcional)</Label>
                  <Input type="text" id="description" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-2.5">
                  <Label htmlFor="link">Link</Label>
                  <div className="flex w-full max-w-sm items-center">
                    <Input type="text" id="link" placeholder="" className="border border-rose-50 rounded-none p-1" disabled />
                    <Button size="sm" className="rounded-none font-bold">
                      Copiar
                    </Button>
                  </div>
                </div>

                <DialogFooter className="sm:justify-start mt-4">
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
            {payment_links.map((payment_link, id) => (
              <TableRow key={id}>
                <TableCell>{payment_link.description}</TableCell>
                <TableCell><a href={payment_link.link} target="_blank">{payment_link.link}</a></TableCell>
                <TableCell>{payment_link.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}