import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import { ZodType } from 'zod'

// Modify the hook to accept a Yup validation schema as an argument
export function useMultiStepForm<T extends FieldValues>(
  schema: ZodType<any, any, any>,
  defaultValues?: T,
  initialStep = 0,
) {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    resolver: zodResolver(schema), // Apply the Yup resolver with the schema
    mode: 'onBlur', // Validate all fields on submit
  })
  const [step, setStep] = useState(initialStep)

  const nextStep = () => setStep((currentStep) => currentStep + 1)
  const prevStep = () => setStep((currentStep) => Math.max(currentStep - 1, 0))

  return { methods, step, nextStep, prevStep } as const
}
