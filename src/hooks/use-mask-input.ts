/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

export function useMaskedInput<T extends FieldValues>(
  form: UseFormReturn<T>,
  fieldName: Path<T>,
  maskFunction: (value: string) => string,
) {
  const value = form.watch(fieldName) as string

  useEffect(() => {
    form.setValue(fieldName, maskFunction(value) as never)
  }, [value, form.setValue, fieldName, maskFunction])
}
