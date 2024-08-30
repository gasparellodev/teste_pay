import { ToggleTheme } from '../preferences/toggle-theme'
import { SheetMenu } from './sheet-menu'

interface NavbarProps {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-zinc-200 backdrop-blur dark:border-zinc-800">
      <div className="container flex h-14 items-center px-3 sm:px-6">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold tracking-tight sm:text-xl">{title}</h1>
        </div>
        {/* <div className="flex flex-1 items-center justify-end space-x-2">
          <ToggleTheme />
        </div> */}
      </div>
    </header>
  )
}
