'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import ColorPickerIcon from '@/components/icons/color-picker-icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColorPicker } from '@/components/ui/color-picker'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, InputWrapper } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function CheckoutFooter() {
  const itemsCheckbox = [
    {
      id: 'show_attendance',
      label: 'Mostrar atendimento',
    },
    {
      id: 'show_payment_icons',
      label: 'Mostrar ícones de opções de pagamento',
    },
    {
      id: 'show_security_seal',
      label: 'Mostrar selo de segurança',
    },
    {
      id: 'show_address_store',
      label: 'Mostrar endereço da loja',
    },
    {
      id: 'show_store_info',
      label: 'Mostrar nome da empresa e CNPJ ou nome completo e CPF',
    },
  ] as const

  const editFooterFormSchema = z.object({
    footer_background_color: z.string(),
    footer_text_color: z.string(),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
  })

  type EditFooterFormValues = z.infer<typeof editFooterFormSchema>

  const form = useForm<EditFooterFormValues>({
    resolver: zodResolver(editFooterFormSchema),
    defaultValues: {
      footer_background_color: '#000000',
      footer_text_color: '#FFFFFF',
      items: ['show_payment_icons', 'show_attendance'],
    },
  })

  async function handleEditFooter() {
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
          onSubmit={form.handleSubmit(handleEditFooter)}
          className="w-full space-y-4 px-2"
        >
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Cores</h4>
              <p className="text-sm text-zinc-600">
                Recomendamos utilizar cores com maior contraste para não
                prejudicar a visualização dos elementos do rodapé.
              </p>
            </div>
            <FormField
              control={form.control}
              name="footer_background_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor de fundo</FormLabel>
                  <div className="flex items-center gap-2">
                    <ColorPicker {...field} />
                    <InputWrapper className="flex-1">
                      <ColorPickerIcon className="size-4" />
                      <FormControl>
                        <Input {...field} className="w-full" />
                      </FormControl>
                    </InputWrapper>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="footer_text_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do texto</FormLabel>
                  <div className="flex items-center gap-2">
                    <ColorPicker {...field} />
                    <InputWrapper className="flex-1">
                      <ColorPickerIcon className="size-4" />
                      <FormControl>
                        <Input {...field} className="w-full" />
                      </FormControl>
                    </InputWrapper>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem className="flex flex-col gap-2">
                <div className="">
                  <FormLabel className="text-base">Configurações</FormLabel>
                  <FormDescription>
                    De acordo com o Decreto Federal 7.962/13 - Lei do
                    E-commerce, as informações de endereço da loja, nome da
                    empresa, CNPJ, telefone e e-mail e métodos de pagamento
                    devem ser visíveis em sua loja.
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