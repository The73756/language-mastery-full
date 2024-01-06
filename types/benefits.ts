export type CardIcon = 'crown' | 'lightning' | 'cap'

export interface BenefitsCard {
  id: string
  title: string
  duration: string
  benefits: string[]
  price: string
  isPopular: boolean
  icon: CardIcon
}
