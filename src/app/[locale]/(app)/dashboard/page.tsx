import { ArrowRight, ChevronRight } from 'lucide-react'

import { ChartsContainer } from '@/components/features/dashboard/charts-container'
import { Stats } from '@/components/features/dashboard/stats'
import FileExportIcon from '@/components/icons/file-export-icon'
import { ContentLayout } from '@/components/layouts/content-layout'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
// import { serverAuth } from '@/lib/auth'

export default async function Dashboard() {
  // const session = await serverAuth()

  return (
    // <ContentLayout title={`Welcome, ${session?.user?.name}!`}>
    <ContentLayout title={`Bem vindo`}>
      <div className="w-full space-y-4">
        <div className="heading flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <h2 className="font-semibold text-zinc-700 dark:text-zinc-100">
            Visão Geral
          </h2>
          <div className="space-x-3">
            <Button variant={'outline'} size="sm">
              <span>Exportar</span>
              <FileExportIcon className="size-4" />
            </Button>
            <Button className="group" size="sm">
              <span>Antecipar Retirada</span>
              <div className="relative h-4 w-4">
                <ChevronRight className="absolute inset-0 size-4 transition-all duration-150 group-hover:scale-x-0" />
                <ArrowRight className="absolute size-4 scale-x-0 transition-all duration-150 group-hover:scale-x-100" />
              </div>
            </Button>
          </div>
        </div>
        <Stats />
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h3 className="font-semibold text-zinc-700 dark:text-zinc-100">
            Análise
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">Filtrar por: </span>
            <ToggleGroup
              size={'sm'}
              type="single"
              defaultValue="daily"
              className="divide-border border-border gap-0 divide-x overflow-clip rounded-lg border"
            >
              <ToggleGroupItem
                className="rounded-none text-xs font-medium text-zinc-600 dark:text-zinc-300"
                value="daily"
                aria-label="Toggle daily"
              >
                Diário
              </ToggleGroupItem>
              <ToggleGroupItem
                className="rounded-none text-xs font-medium text-zinc-600 dark:text-zinc-300"
                value="weekly"
                aria-label="Toggle weekly"
              >
                Semanal
              </ToggleGroupItem>
              <ToggleGroupItem
                className="rounded-none text-xs font-medium text-zinc-600 dark:text-zinc-300"
                value="monthly"
                aria-label="Toggle monthly"
              >
                Mensal
              </ToggleGroupItem>
              <ToggleGroupItem
                className="rounded-none text-xs font-medium text-zinc-600 dark:text-zinc-300"
                value="annually"
                aria-label="Toggle annually"
              >
                Anual
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <ChartsContainer />
      </div>
    </ContentLayout>
  )
}
