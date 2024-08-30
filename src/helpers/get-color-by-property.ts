export function getColorByProperty(property: string) {
  type ColorMap = {
    [key: string]: string
  }

  const mapColor: ColorMap = {
    pix: '#E59419',
    credit: '#5656C9',
    ticket: '#0098AF',
    debit: '#B285E0',
    paypal: '#59A659',
    bank: '#B24CB2',
    industry: '#6A8AA6',
    education: '#B285E0',
    real_estate: '#94B4D1',
    health: '#77B3FF',
  }

  const backupColors = [
    '#335CFF', // Light Turquoise
    '#ffabf9', // Soft Pink
    '#ab0e79', // Deep Magenta
    '#FFB31F', // Vibrant Orange
    '#8D72E4', // Muted Wine
    '#4363f0', // Bright Blue
    '#fe06ed', // Neon Pink
    '#A3A3A3', // Dark Purple
    '#4466d9', // Medium Blue
    '#d53774', // Pinkish Red
  ]

  // Return the color from mapColor if it exists
  if (mapColor[property]) {
    return mapColor[property]
  }

  // Hash function to map property string to a unique index
  let hash = 0
  for (let i = 0; i < property.length; i++) {
    const char = property.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }

  // Use the absolute value of hash and mod by the length of backupColors to get a unique index
  const index = Math.abs(hash) % backupColors.length

  return backupColors[index]
}
