'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'

import { StepOne } from './steps/step-one'
import { StepThree } from './steps/step-three'
import { StepTwo } from './steps/step-two'

type Props = React.HTMLAttributes<HTMLDivElement>

export default function ResetPasswordForm({ className, ...props }: Props) {
  const t = useTranslations('pages.forgot-password')

  const INITIAL_STEP = 0

  const [step, setStep] = useState(INITIAL_STEP)
  const [formSuccess, setFormSuccess] = useState<boolean>(false)

  const stepsMap: Array<{
    title: string
    component: React.ReactNode
    description: string
  }> = [
    {
      title: t('steps.step-one.title'),
      description: t('steps.step-one.subtitle'),
      component: <StepOne setStep={setStep} />,
    },
    {
      title: t('steps.step-two.title'),
      description: t('steps.step-two.subtitle'),
      component: <StepTwo setStep={setStep} />,
    },
    {
      title: t('steps.step-three.title'),
      description: t('steps.step-three.subtitle'),
      component: <StepThree setFormSuccess={setFormSuccess} />,
    },
  ]

  return (
    <div
      className={cn('flex flex-col items-center gap-4', className)}
      {...props}
    >
      {/* If success show the UI for Success Sended */}

      {formSuccess && (
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex h-28 w-28 items-center justify-center rounded-full bg-brand p-3"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              className="h-20 w-20 text-zinc-800"
            >
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {t('steps.success.span')}
          </span>
          <h4 className="text-center text-2xl font-bold leading-tight tracking-tight text-foreground">
            {t('steps.success.title')}
          </h4>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            {t('steps.success.subtitle')}
          </p>
        </div>
      )}

      {/* If not success show the steps */}
      {!formSuccess && (
        <>
          <div className="space-y-3 px-4 text-center lg:px-6">
            <h2 className="text-2xl font-bold tracking-tighter">
              {stepsMap[step].title}
            </h2>
            <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
              {stepsMap[step].description}
            </p>
          </div>
          <div className="mt-1 w-full max-w-sm">{stepsMap[step].component}</div>
        </>
      )}
      {/* {isError && (
              <ErrorFetching title="Houve um erro ao atualizar sua senha!" />
            )} */}
    </div>
  )
}
