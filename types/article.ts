import { BenefitsCard } from '@/types/benefits'

export const ArticleType = {
  PROMO: 'PROMO',
  TEXT: 'TEXT',
  CARD: 'CARD',
} as const

export interface ArticleBase {
  id: number
  position: number
  type: keyof typeof ArticleType
}

export interface ArticlePromo extends ArticleBase {
  type: typeof ArticleType.PROMO
  imageUrl?: string
  title?: string
  subtitle?: string
  buttonText?: string
}

export interface ArticleText extends ArticleBase {
  type: typeof ArticleType.TEXT
  title?: string
  subtitle?: string
  text?: string
  direction: 'left' | 'right'
  buttonText?: string
  buttonLink?: string
  imageUrl?: string
}

export interface ArticleCard extends ArticleBase {
  type: typeof ArticleType.CARD
  title?: string
  cards: BenefitsCard[]
}

export type Article = ArticlePromo | ArticleText | ArticleCard

export interface ArticleSchema {
  articleData: Article[]
  _inited: boolean
}
