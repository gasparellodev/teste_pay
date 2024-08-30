import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import LoadingIcon from '@/components/icons/loading-icon'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const verifyCodeFormSchema = z.object({
  pin: z.string().min(6, {
    message: 'O código tem 6 dígitos.',
  }),
})

type FormDataProps = z.infer<typeof verifyCodeFormSchema>

interface ForgotPasswordFormProps extends ComponentProps<'form'> {
  email?: string
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export function StepTwo({
  className,
  email,
  setStep,
  ...props
}: ForgotPasswordFormProps) {
  const form = useForm<FormDataProps>({
    resolver: zodResolver(verifyCodeFormSchema),
    defaultValues: {
      pin: '',
    },
  })

  const pin = form.watch('pin')

  async function handleVerifyCode({ pin }: FormDataProps) {
    setStep(2)
    console.log(pin)
  }

  async function resendEmail() {
    // await sendEmail(email)
    console.log(email)
  }

  useEffect(() => {
    if (pin.length === 6) {
      toast.promise(handleVerifyCode({ pin }), {
        loading: 'Validando código...',
        success: () => {
          return `Código validado com sucesso!`
        },
        error: 'Erro ao validar código. Tente novamente mais tarde!',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin])
  return (
    <>
      <ScrollArea className="flex-1">
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleVerifyCode)}
              className={cn(
                'flex w-full flex-col items-center gap-8',
                className,
              )}
              {...props}
            >
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot aria-placeholder="0" index={0} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={4} />
                        </InputOTPGroup>
                        <InputOTPGroup>
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                    <FormDescription className="pt-3 text-center text-xs">
                      Não recebeu o código?{' '}
                      <Button
                        className="h-fit p-0 text-xs"
                        variant="link"
                        disabled={form.formState.isSubmitting}
                        type="button"
                        onClick={() =>
                          toast.promise(resendEmail, {
                            loading: 'Enviando código...',
                            success: 'Código reenviado com sucesso!',
                            error:
                              'Erro ao reenviar código. Tente novamente mais tarde!',
                          })
                        }
                      >
                        Reenviar
                      </Button>
                    </FormDescription>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="gap-2"
                disabled={form.formState.isSubmitting}
              >
                <span>Confirmar código</span>
                {form.formState.isSubmitting && (
                  <LoadingIcon className="size-4 animate-spin" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </ScrollArea>
    </>
  )
}
