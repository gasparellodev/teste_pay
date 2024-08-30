import { useCallback, useEffect, useState } from 'react'
import { FieldValues, UseFormReturn } from 'react-hook-form'

// Define the hook with generic type TFieldValues extending FieldValues
export default function useValidateFormFields<TFieldValues extends FieldValues>(
  methods: UseFormReturn<TFieldValues>, // Use UseFormReturn with generic type
  fields: Array<keyof TFieldValues>, // Array of keys from TFieldValues
): boolean {
  const [isValidPartialForm, setIsValidPartialForm] = useState(false)

  const dirtyFields = methods.formState.dirtyFields

  // Use a callback to validate the form fields
  const validate = useCallback(async () => {
    const areAllSpecifiedFieldsDirty = fields.every((field) =>
      // eslint-disable-next-line no-prototype-builtins
      dirtyFields.hasOwnProperty(field),
    )
    if (areAllSpecifiedFieldsDirty) {
      const result = await methods.trigger(fields as never)
      setIsValidPartialForm(result)
    }
  }, [fields, dirtyFields, methods])

  // Use an effect to watch the fields and trigger validation
  useEffect(() => {
    const subscription = methods.watch((value, { name }) => {
      if (fields.includes(name as keyof TFieldValues)) {
        validate()
      }
    })

    return () => subscription.unsubscribe()
  }, [fields, methods, validate])

  return isValidPartialForm
}
