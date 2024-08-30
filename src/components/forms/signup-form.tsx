'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
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
import UserIcon from '../icons/user-icon'
import { Checkbox } from '../ui/checkbox'

interface SignUpFormProps extends ComponentProps<'form'> {}

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const t = useTranslations('pages.signup.form')

  const signupSchema = z
    .object({
      name: z
        .string({
          required_error: t('name.errors.required'),
        })
        .min(5, t('name.errors.required')),
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
      password_confirmation: z
        .string({
          required_error: t('password-confirmation.errors.required'),
        })
        .min(8, t('password-confirmation.errors.minLength')),
      terms: z.boolean({
        required_error: t('terms-of-products.errors.required'),
      }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: t('password-confirmation.errors.match'),
      path: ['confirmPassword'],
    })
    .refine((data) => data.terms === true, {
      message: t('terms-of-products.errors.required'),
      path: ['terms'],
    })

  type FormDataProps = z.infer<typeof signupSchema>

  const form = useForm<FormDataProps>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      password_confirmation: '',
      terms: false,
    },
  })

  async function handleSignUp({ email, password }: FormDataProps) {
    console.log(email, password)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignUp)}
        className={cn(
          'mx-auto flex w-full max-w-sm flex-1 flex-col gap-4',
          className,
        )}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('name.label')}</FormLabel>
              <div className="flex justify-center items-center">
                <div className="border border-rose-50 rounded-md p-2">
                  <UserIcon className="size-4 text-zinc-500" />
                </div>
                <FormControl>
                  <Input {...field} placeholder={t('name.placeholder')} />
                </FormControl>
                </div>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password-confirmation.label')}</FormLabel>
              <div className="flex justify-center items-center">
                <div className="border border-rose-50 rounded-md p-2">
                  <LockIcon className="size-4 text-zinc-500" />
                </div>
                <FormControl>
                  <InputPassword
                    {...field}
                    placeholder={t('password-confirmation.placeholder')}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <div className="space-y-1.5">
              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs font-normal text-zinc-600 dark:text-zinc-400">
                    {t.rich('terms-of-products.label', {
                      link: (chunks) => (
                        <Link
                          href={'/prohibited-and-restricted-products'}
                          className="font-semibold text-brand underline"
                        >
                          {chunks}
                        </Link>
                      ),
                    })}
                  </FormLabel>
                </div>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />

        <Button
          type="submit"
          className="gap-2"
          disabled={form.formState.isSubmitting}
        >
          <span>Acessar conta</span>
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" />
          )}
        </Button>
        <div className="max-w-sm text-left">
          <span className="block text-xs/snug text-zinc-500 dark:text-zinc-400">
            {t.rich('terms-of-service.label', {
              linkTerms: (chunks) => (
                <Link
                  href={'/terms-of-service'}
                  className="font-semibold text-brand underline"
                >
                  {chunks}
                </Link>
              ),
              linkPolicy: (chunks) => (
                <Link
                  href={'/privacy-policy'}
                  className="font-semibold text-brand underline"
                >
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </div>
      </form>
    </Form>
  )
}
