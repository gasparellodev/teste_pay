export const onlyNumbers = (value: string) => {
  return value.replace(/\D/g, '')
}

export const cnpjMask = (value: string | undefined) => {
  if (!value) return ''
  return value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const phoneMask = (value: string | undefined) => {
  if (!value) return ''
  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}

export const zipCodeMask = (value: string) => {
  if (!value) return ''
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}

export const moneyMask = (value: string) => {
  if (typeof value !== 'string') return ''

  const valueToNumber = Number(value?.replace(/\D/g, ''))

  const monetaryAmount = (valueToNumber / 100)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(\d{3})(\d{3})(\d{3}),/g, '$1.$2.$3.$4,')
    .replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,')
    .replace(/(\d)(\d{3}),/g, '$1.$2,')

  return `${monetaryAmount}`
}

export const moneyMaskArray = (value: string[]) => {
  value.map((item: string) => {
    const valueToNumber = Number(item?.replace(/\D/g, ''))

    const monetaryAmount = (valueToNumber / 100)
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(\d{3})(\d{3})(\d{3}),/g, '$1.$2.$3.$4,')
      .replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,')
      .replace(/(\d)(\d{3}),/g, '$1.$2,')

    return `${monetaryAmount}`
  })
}

export const creditCardNumberMask = (value: string) => {
  const cleanValue = value.replace(/\D/g, '')
  const truncatedValue = cleanValue.substring(0, 16)
  return truncatedValue.replace(/(\d{4})(?=\d)/g, '$1 ')
}

export const creditCardExpirationMask = (value: string) => {
  const cleanedValue = value.replace(/[^0-9]/g, '') // Remove non-numeric characters

  if (cleanedValue.length <= 2) {
    // If there are 2 or fewer digits, return as is
    return cleanedValue
  }

  // Insert the slash after the first two digits (MM)
  const formattedValue =
    cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2, 6)

  return formattedValue
}
