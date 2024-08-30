import * as React from "react"

import { cn } from "@/lib/utils"
import { useFormField } from './form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputRootProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function InputWrapper({ className, ...props }: InputRootProps) {
  const { error, formItemId } = useFormField()
  return (
    <div
      id={formItemId}
      className={cn(
        'flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        {
          'border-red-400 focus-within:ring-red-400': error,
        },
        className,
      )}
      {...props}
    />
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, InputWrapper }

