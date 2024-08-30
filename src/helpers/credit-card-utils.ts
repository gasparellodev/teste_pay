import elo from '@/assets/cards/elo.svg'
import hipercard from '@/assets/cards/hipercard.svg'
import maestro from '@/assets/cards/maestro.svg'
import mastercard from '@/assets/cards/mastercard.svg'
import visa from '@/assets/cards/visa.svg'

const cardValidator = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
  elo: /^(4011|431274|438935|451416|457393|4576|457631|457632|504175|50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|627780|636297|636368|636369|(6503[1-3])|(6500(3[5-9]|4[0-9]|5[0-1]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(650(48[5-9]|49[0-9]|50[0-9]|51[1-9]|52[0-9]|53[0-7]))|(6505(4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(6507(2[0-7]))|(650(90[1-9]|91[0-9]|920))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[1-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8]))|(506(699|77[0-8]|7[1-6][0-9]))|(509([0-9][0-9][0-9])))/,
  hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
  mastercard:
    /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/,
  // any othes brands logics
}

export function getCardType(value: string): string | null {
  for (const card in cardValidator) {
    if (cardValidator[card as keyof typeof cardValidator].test(value)) {
      return card
    }
  }
  return null
}

export function getCardIcon(cardType: string | null): string | null {
  switch (cardType) {
    case 'visa':
      return 'visa'
    case 'mastercard':
      return 'mastercard'
    case 'elo':
      return 'elo'
    case 'hipercard':
      return 'hipercard'
    case 'maestro':
      return 'maestro'
    default:
      return null
  }
}

export const creditIcons = [
  {
    name: 'mastercard',
    icon: mastercard,
  },
  {
    name: 'visa',
    icon: visa,
  },
  {
    name: 'hipercard',
    icon: hipercard,
  },
  {
    name: 'elo',
    icon: elo,
  },
  {
    name: 'maestro',
    icon: maestro,
  },
]
