'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { Card } from '@/components/card'
import { BenefitsCard } from '@/types/benefits'

interface CardBlockProps {
  cards: BenefitsCard[]
  title: string
}

export const CardBlock = ({ cards, title }: CardBlockProps) => {
  const [emblaRef] = useEmblaCarousel({
    active: false,
    breakpoints: {
      '(max-width: 1608px)': { active: true },
    },
  })

  return (
    <div>
      <h2 className="text-primary text-36-700 md:text-48-700 mb-10">{title}</h2>
      <div className=" overflow-hidden pt-10 -mt-10" ref={emblaRef}>
        <div className="xl:grid flex xl:grid-cols-3 max-h-[750px] gap-3 md:gap-5 ">
          {cards.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key -- it's ok in current case
            <Card key={index} {...card} className="h-full embla-slide" />
          ))}
        </div>
      </div>
    </div>
  )
}
