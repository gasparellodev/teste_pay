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
 
const pixels = [
  {
    pixel: "Teste ID: 039029302",
    service: "Facebook",
    status: "ATIVO",
  },
]
 
export function Pixels() {  
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
                    Cadastrar Pixel
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-black">
                <DialogHeader className="mb-4">
                  <DialogTitle>Cadastrar Pixel</DialogTitle>
                </DialogHeader>
                
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Serviço</Label>
                    <Select defaultValue="facebook">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent className="bg-rose-50 text-black font-bold">
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="google-ads">Google Ads</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full max-w-sm items-center gap-2.5">
                    <Label htmlFor="status">Status</Label>
                    <Switch
                        id="status"
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Nome do pixel</Label>
                  <Input type="text" id="name" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="total_cupons">ID do pixel</Label>
                  <Input type="text" id="total_cupons" placeholder="" className="border border-rose-50 rounded-sm p-0.5" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="min_value">Marcar Pix</Label>
                    <Select defaultValue="sim">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sim ou não" />
                        </SelectTrigger>
                        <SelectContent className="bg-rose-50 text-black font-bold">
                            <SelectItem value="sim">Sim</SelectItem>
                            <SelectItem value="nao">Não</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="min_value">Marcar Boleto</Label>
                    <Select defaultValue="sim">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sim ou não" />
                        </SelectTrigger>
                        <SelectContent className="bg-rose-50 text-black font-bold">
                            <SelectItem value="sim">Sim</SelectItem>
                            <SelectItem value="nao">Não</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center space-x-2 mb-4 p-1">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Quero um evento customizado para boleto
                    </label>
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
              <TableHead>Pixel</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pixels.map((pixel, id) => (
              <TableRow key={id}>
                <TableCell>{pixel.pixel}</TableCell>
                <TableCell>{pixel.service}</TableCell>
                <TableCell>{pixel.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}