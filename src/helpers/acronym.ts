export function acronym(string: string | undefined) {
  const acronymString = string
    ?.split(' ')
    .slice(0, 1)
    .map((word) => {
      return word[0] + word[1]
    })
    .join('')
    .toUpperCase()

  return acronymString
}
