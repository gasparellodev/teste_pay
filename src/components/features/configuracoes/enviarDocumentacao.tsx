import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function EnviarDocumentacao({ className, ...props }: Props) {
  return (
    <div className={cn('', className)} {...props}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Documento</TableHead>
            <TableHead className="w-[300px]">Obrigatório</TableHead>
            <TableHead className="w-[300px]">Status</TableHead>
            <TableHead>Cliente</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 2 }).map((_, i) => {
            return (
              <TableRow key={i} className="bg-white dark:bg-zinc-800">
                <TableCell className="font-mono text-xs font-medium">
                  Foto do documento (frente)
                </TableCell>
                <TableCell className="text-muted-foreground">Sim</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="text-muted-foreground rounded-xl bg-lime-600 p-2 font-medium text-white">
                      Aprovado
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  Diego Schell Fernandes
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
