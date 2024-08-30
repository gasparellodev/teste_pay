'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

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
import { InputPassword } from '@/components/ui/input-password'
import { cn } from '@/lib/utils'

import LockIcon from '../icons/lock-icon'
import MailIcon from '../icons/mail-icon'

interface LoginFormProps extends ComponentProps<'form'> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const t = useTranslations('pages.login.form')
  const router = useRouter()

  const loginSchema = z.object({
    email: z
      .string({
        required_error: t('email.errors.required'),
      })
      .email(t('email.errors.email')),
    password: z
      .string({
        required_error: t('password.errors.required'),
      })
      .min(8, t('password.errors.minLength')),
  })

  type FormDataProps = z.infer<typeof loginSchema>

  const form = useForm<FormDataProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLogin({ email, password }: FormDataProps) {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: '/dashboard',
    })

    // Check if signIn was unsuccessful
    if (result?.error) {
      toast.error('E-mail ou senha inválidos.')
    } else {
      // Redirect to dashboard after successful login
      return router.push('/dashboard')
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className={cn(
          'mx-auto flex w-full max-w-sm flex-1 flex-col gap-4',
          className,
        )}
        {...props}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email.label')}</FormLabel>
              <div className="flex justify-center items-center">
                <div className="border border-rose-50 rounded-md p-2">
                  <MailIcon className="size-4 text-zinc-500" />
                </div>
                <FormControl>
                  <Input {...field} placeholder={t('email.placeholder')} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password.label')}</FormLabel>
              <div className="flex justify-center items-center">
                <div className="border border-rose-50 rounded-md p-2">
                  <LockIcon className="size-4 text-zinc-500" />
                </div>
                <FormControl>
                  <InputPassword
                    {...field}
                    placeholder={t('password.placeholder')}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          href="/reset-password"
          className="group ml-auto flex items-center text-sm font-semibold text-zinc-600 underline hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <span>{t('forgot-password')}</span>
        </Link>

        <Button
          type="submit"
          className="gap-2"
          disabled={form.formState.isSubmitting}
        >
          <span>{t('action')}</span>
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" />
          )}
        </Button>
      </form>
    </Form>
  )
}
