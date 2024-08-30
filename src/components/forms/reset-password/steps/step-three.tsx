import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import React, { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import LoadingIcon from '@/components/icons/loading-icon'
import LockIcon from '@/components/icons/lock-icon'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { InputWrapper } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'
import { cn } from '@/lib/utils'

const changePasswordFormSchema = z
  .object({
    password: z.string().min(8, 'A senha deve ter pelo menos 8 dígitos'),
    confirmPassword: z.string().min(8, 'A senha deve ter pelo menos 8 dígitos'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senha e confirmação de senha não conferem',
    path: ['confirmPassword'],
  })

type FormDataProps = z.infer<typeof changePasswordFormSchema>

interface ForgotPasswordFormProps extends ComponentProps<'form'> {
  setFormSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export function StepThree({
  className,
  setFormSuccess,
  ...props
}: ForgotPasswordFormProps) {
  const t = useTranslations('pages.forgot-password.steps.step-three')
  const form = useForm<FormDataProps>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  async function handleChangePassword({
    password,
    confirmPassword,
  }: FormDataProps) {
    console.log(password, confirmPassword)
    setFormSuccess(true)
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleChangePassword)}
            className={cn('flex w-full flex-col gap-8', className)}
            {...props}
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.password.label')}</FormLabel>
                  <InputWrapper>
                    <LockIcon className="size-4 text-zinc-500" />
                    <FormControl>
                      <InputPassword
                        {...field}
                        placeholder={t('form.password.placeholder')}
                      />
                    </FormControl>
                  </InputWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.password-confirmation.label')}</FormLabel>
                  <InputWrapper>
                    <LockIcon className="size-4 text-zinc-500" />
                    <FormControl>
                      <InputPassword
                        placeholder={t(
                          'form.password-confirmation.placeholder',
                        )}
                        {...field}
                      />
                    </FormControl>
                  </InputWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="gap-2"
              disabled={form.formState.isSubmitting}
            >
              <span>Atualizar senha</span>
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
