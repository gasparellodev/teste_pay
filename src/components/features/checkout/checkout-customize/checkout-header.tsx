'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Minus, Plus } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import ColorPickerIcon from '@/components/icons/color-picker-icon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
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
import { MinimalTiptapEditor } from '@/components/ui/minimal-tiptap'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { acronym } from '@/helpers/acronym'

const MAX_FILE_SIZE = 1024 * 1024 // 1mb
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/svg+xml',
]

const editHeaderFormSchema = z.object({
  logo: z
    .instanceof(FileList)
    .refine((files) => !!files.item(0), 'A imagem de perfil é obrigatória')
    .refine(
      (files) => files.item(0)!.size <= MAX_FILE_SIZE,
      `Tamanho máximo de 1MB`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files.item(0)!.type),
      'Formato de imagem inválido',
    )
    .transform((files) => {
      return files.item(0)!
    }),
  header_bg_color: z.string(),
  header_elements_color: z.string(),
  logo_position: z.enum(['right', 'left', 'center'], {
    required_error: 'You need to select a notification type.',
  }),
  ad_text: z.string(),
  stopwatch_text: z.string(),
  stopwatch_time: z.number(),
  ad_bar_color: z.string(),
  ad_text_color: z.string(),
  stopwatch_color: z.string(),
})

type EditHeaderFormValues = z.infer<typeof editHeaderFormSchema>

export function CheckoutHeader() {
  const { data } = useSession()
  const [preview, setPreview] = useState<string | undefined>(undefined)

  const form = useForm<EditHeaderFormValues>({
    resolver: zodResolver(editHeaderFormSchema),
    defaultValues: {
      header_bg_color: '#000000',
      header_elements_color: '#FFFFFF',
      logo_position: 'center',
      stopwatch_text: 'A oferta termina em',
      stopwatch_time: 0,
      ad_bar_color: '#7d51a7',
      ad_text_color: '#FFFFFF',
      stopwatch_color: '#000000',
    },
  })

  async function handleEditHeader() {
    try {
      toast.success('Logo atualizado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error(
        'Não foi possível atualizar o logo. Tente novamente mais tarde.',
      )
    }
  }
  function onMediaSelected(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target
    if (!files) {
      return
    }
    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }

  return (
    <ScrollArea className="max-h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleEditHeader)}
          className="w-full space-y-4 px-2"
        >
          <div className="space-y-2">
            <h4 className="font-semibold">Logotipo</h4>
            <p className="text-sm text-zinc-600">
              Atualize o logo de sua empresa que será exibido no checkout
            </p>
          </div>
          <div className="flex w-full items-center gap-6">
            <Avatar className="h-20 w-20 rounded-xl">
              <AvatarImage src={preview} className="object-cover" />
              <AvatarFallback className="h-20 w-20 rounded-xl">
                {acronym(data?.user?.name ?? '')}
              </AvatarFallback>
            </Avatar>
            <FormField
              control={form.control}
              name="logo"
              render={() => (
                <FormItem className="">
                  <FormLabel className={buttonVariants({ variant: 'outline' })}>
                    Escolher arquivo
                  </FormLabel>
                  <FormDescription className="text-xs text-zinc-500 dark:text-zinc-400">
                    JPG, PNG ou WEBP. 5MB max.
                  </FormDescription>
                  <FormControl>
                    <input
                      type="file"
                      className="invisible h-0 w-0"
                      {...form.register('logo', {
                        onChange: onMediaSelected,
                      })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="logo_position"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Posicionamento</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="left" />
                      </FormControl>
                      <FormLabel className="font-normal">Esquerda</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="center" />
                      </FormControl>
                      <FormLabel className="font-normal">Centro</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="right" />
                      </FormControl>
                      <FormLabel className="font-normal">Direita</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Cores</h4>
              <p className="text-sm text-zinc-600">
                Recomendamos utilizar cores com maior contraste para não
                prejudicar a visualização dos elementos do cabeçalho.
              </p>
            </div>
            <FormField
              control={form.control}
              name="header_bg_color"
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
              name="header_elements_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor dos elementos</FormLabel>
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
              <h4 className="font-semibold">Barra de anúncios & cronômetro</h4>
              <p className="text-sm text-zinc-600">
                A barra de anúncios ficará fixa abaixo do cabeçalho. Se não
                houver texto ou o cronômetro for redefinido, a barra não
                aparecerá.
              </p>
            </div>
            <FormField
              control={form.control}
              name="ad_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Texto da barra de anúncio (opcional)</FormLabel>
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <MinimalTiptapEditor
                        value={field.value}
                        onValueChange={field.onChange}
                        outputValue="json"
                        disabled={false}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stopwatch_text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Texto do cronômetro</FormLabel>
                  <InputWrapper className="flex-1">
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>
                  </InputWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stopwatch_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempo do cronômetro (em minutos)</FormLabel>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-9"
                      type="button"
                    >
                      <Minus className="size-4" />
                      <span className="sr-only">Decrement</span>
                    </Button>
                    <InputWrapper className="w-fit">
                      <FormControl>
                        <Input className="w-14 text-center" {...field} />
                      </FormControl>
                    </InputWrapper>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-9"
                      type="button"
                    >
                      <Plus className="size-4" />
                      <span className="sr-only">Decrement</span>
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ad_bar_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor da barra</FormLabel>
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
              name="ad_text_color"
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

            <FormField
              control={form.control}
              name="stopwatch_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cor do cronômetro</FormLabel>
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

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Salvar
          </Button>
        </form>
      </Form>
    </ScrollArea>
  )
}