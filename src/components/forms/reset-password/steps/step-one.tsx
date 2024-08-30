import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { ComponentProps, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import LoadingIcon from '@/components/icons/loading-icon'
import MailIcon from '@/components/icons/mail-icon'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, InputWrapper } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const forgotPasswordFormSchema = z.object({
  email: z
    .string({
      required_error: 'Informe o e-mail de acesso.',
    })
    .email('Digite um e-mail inválido.'),
})

type FormDataProps = z.infer<typeof forgotPasswordFormSchema>

interface ForgotPasswordFormProps extends ComponentProps<'form'> {
  setStep: React.Dispatch<SetStateAction<number>>
}

export function StepOne({
  className,
  setStep,
  ...props
}: ForgotPasswordFormProps) {
  const t = useTranslations('pages.forgot-password.steps.step-one')
  const form = useForm<FormDataProps>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  })

  async function handleSendCodeToEmail({ email }: FormDataProps) {
    setStep(1)
    console.log(email)
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSendCodeToEmail)}
            className={cn('flex w-full flex-col gap-8', className)}
            {...props}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.label')}</FormLabel>
                  <div className="flex justify-center items-center">
                    <div className="border border-rose-50 rounded-md p-2">
                      <MailIcon className="size-4 text-zinc-500" />
                    </div>
                    <FormControl>
                      <Input {...field} placeholder={t('form.placeholder')} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="gap-2"
              disabled={form.formState.isSubmitting}
            >
              <span>{t('form.action')}</span>
              {form.formState.isSubmitting && (
                <LoadingIcon className="size-4 animate-spin" />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}
