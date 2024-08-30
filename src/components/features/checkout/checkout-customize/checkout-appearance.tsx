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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

export function CheckoutAppearance() {
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

  const fontFamilies = [
    'WorkSans',
    'Rubik',
    'Montserrat',
    'Nunito',
    'Taviraj',
  ] as const

  // const radiiOptions = [
  //   {
  //     value: '0px',
  //     label: 'Retangular',
  //     icon:
  //   }
  // ]

  const editFooterFormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
    general_title_color: z.string(),
    general_description_color: z.string(),
    general_total_value_color: z.string(),
    general_tag_color: z.string(),
    general_tag_number_color: z.string(),
    general_button_color: z.string(),
    general_button_text_color: z.string(),
    general_button_secondary_color: z.string(),
    general_button_secondary_text_color: z.string(),
    general_title_font: z.enum(fontFamilies),
    general_title_uppercase: z.boolean().default(false).optional(),
    general_texts_font: z.enum(fontFamilies),
    general_button_uppercase: z.boolean().default(false).optional(),
    // mobile: z.boolean().default(false).optional(),
  })

  type EditFooterFormValues = z.infer<typeof editFooterFormSchema>

  const form = useForm<EditFooterFormValues>({
    resolver: zodResolver(editFooterFormSchema),
    defaultValues: {
      general_title_color: '#000000',
      general_description_color: '#6d6d6d',
      general_total_value_color: '#68a744',
      general_button_color: '#ffffff',
      general_button_text_color: '#000000',
      general_button_secondary_color: '#68a744',
      general_button_secondary_text_color: '#ffffff',
      general_tag_color: '#ffffff',
      general_tag_number_color: '#ffffff',
      general_title_uppercase: false,
      general_title_font: 'Rubik',
      general_texts_font: 'Rubik',
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
              <h4 className="font-semibold">Geral</h4>
              <p className="text-sm text-zinc-600">
                Recomendamos utilizar cores com maior contraste para não
                prejudicar a visualização dos elementos do rodapé.
              </p>
            </div>
            <FormField
              control={form.control}
              name="general_title_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor dos títulos</FormLabel>
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
              name="general_description_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor das descrições</FormLabel>
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
              name="general_total_value_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do valor total</FormLabel>
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
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Tags</h4>
            </div>
            <FormField
              control={form.control}
              name="general_tag_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor da tag</FormLabel>
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
              name="general_description_color"
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
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Botão principal</h4>
              <p className="text-sm text-zinc-600">
                Os botões principais são aqueles em que o cliente passa de um
                bloco para outro, por exemplo, quando ele confirma seus dados
                pessoais e passa para a parte de preenchimento dos dados de
                endereço.
              </p>
            </div>
            <FormField
              control={form.control}
              name="general_button_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do Botão</FormLabel>
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
              name="general_button_text_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do Texto</FormLabel>
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
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Botão secundário</h4>
              <p className="text-sm text-zinc-600">
                Os botões secundários são aqueles em que o consumidor realiza
                ações dentro do bloco em que está, por exemplo, no formulário de
                CEP quando o cliente clica no botão de calcular o frete.
              </p>
            </div>
            <FormField
              control={form.control}
              name="general_button_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do Botão</FormLabel>
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
              name="general_button_text_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do Texto</FormLabel>
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
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Títulos</h4>
            </div>
            <FormField
              control={form.control}
              name="general_title_font"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fonte</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a fonte" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fontFamilies.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="general_title_uppercase"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Letras Maiúsculas</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Textos</h4>
            </div>
            <FormField
              control={form.control}
              name="general_texts_font"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fonte</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a fonte" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fontFamilies.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Botões</h4>
            </div>
            <FormField
              control={form.control}
              name="general_texts_font"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Formato</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a fonte" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fontFamilies.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="general_button_uppercase"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Letras Maiúsculas</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
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