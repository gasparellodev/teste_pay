import { Currency } from '@/types/currency'

export function formatToCurrency(
  value: number,
  currency?: Currency,
  locales?: string | string[] | undefined,
) {
  return new Intl.NumberFormat(locales || 'pt-BR', {
    style: 'currency',
    currency: currency || 'BRL',
  }).format(value)
}

/**
 * Formats a number to Brazilian Real (BRL) currency format.
 * @param value - The number to be formatted.
 * @returns The formatted currency string.
 */
export function formatToBRL(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Formats a date string to the format "dd/mm/yyyy".
 * @param dateString - The date string to be formatted.
 * @returns The formatted date string.
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // +1 because months are 0-indexed
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

/**
 * Formats a date string to a localized date and time string.
 * @param dateString - The date string to be formatted.
 * @param locale - The desired locale for formatting (e.g., "en-US", "pt-BR", etc.).
 * @returns The formatted date and time string.
 */
export function formatDateTime(dateString: string, locale: string) {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

/**
 * Transforms a string into a sentences string with each first letter uppercase.
 * @param str - The string to be transformed.
 * @returns The transformed sentences string.
 */
export function formatToSentences(str: string) {
  const sentences = str.split('. ')
  const transformedSentences = sentences.map((sentence) => {
    const words = sentence.split(' ')
    const transformedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase()
      const restOfWord = word.slice(1)
      return firstLetter + restOfWord
    })
    return transformedWords.join(' ')
  })
  return transformedSentences.join('. ')
}

/**
 * Formats a string to capitalize the first letter.
 *
 * @param str - The string to be formatted.
 * @returns The formatted string with the first letter capitalized.
 */
export function formatToWord(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Formats a number to a string with leading zero if less than 10.
 * @param value - The number to be formatted.
 * @returns The formatted number string.
 */
export function formatToStatNumber(value: number): string {
  return value < 10 && value > 0 ? `0${value}` : value.toString()
}
