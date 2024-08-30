'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function CheckoutSummary() {
  const itemsCheckbox = [
    {
      id: 'show_input_coupon',
      label: 'Exibir campo de cupom de desconto',
    },
    {
      id: 'can_change_itens_quantity',
      label: 'Permitir alteração na quantidade do item',
    },
  ] as const

  const editSummaryFormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
  })

  type EditSummaryFormValues = z.infer<typeof editSummaryFormSchema>

  const form = useForm<EditSummaryFormValues>({
    resolver: zodResolver(editSummaryFormSchema),
    defaultValues: {
      items: ['show_input_coupon'],
    },
  })

  async function handleEditSummary() {
    try {
      toast.success('Logo atualizado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error(
        'Não foi possível atualizar o logo. Tente novamente mais tarde.',
      )
    }
  }

  return (
    <ScrollArea className="max-h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleEditSummary)}
          className="w-full space-y-4 px-2"
        >
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem className="flex flex-col gap-2">
                <div className="">
                  <FormLabel className="text-base">Configurações</FormLabel>
                  <FormDescription>
                    Personalize a aparência e informações do resumo do seu
                    checkout.
                  </FormDescription>
                </div>
                {itemsCheckbox.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-medium">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Salvar
          </Button>
        </form>
      </Form>
    </ScrollArea>
  )
}