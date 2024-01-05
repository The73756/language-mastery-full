export interface BenefitsCard {
  id: number
  title: string
  duration: string
  benefits: string[]
  price: string
  isPopular: boolean
  icon: 'crown' | 'lightning' | 'cap'
}
