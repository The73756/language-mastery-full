import clsx from 'clsx'
import { Button } from '@/components/shared/button'
import { AnyIconName, Icon } from '@/components/shared/icon'
import { BenefitsCard } from '@/types/benefits'

interface CardProps extends BenefitsCard {
  className?: string
}

export const Card = ({
  benefits,
  icon,
  isPopular,
  duration,
  price,
  title,
  className,
}: CardProps) => {
  return (
    <article
      className={clsx([
        'w-[510px] relative border-current border-4 px-3 md:px-4 py-5 flex flex-col min-h-[640px] md:min-h-[688px] items-center rounded-3xl',
        isPopular ? 'text-accent' : 'text-primary',
        className,
      ])}
    >
      <p
        className="border-[3px] rounded-5 border-primary text-primary text-16-700 md:text-24-700 absolute -top-1 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2"
        hidden={!isPopular}
      >
        Популярное
      </p>
      <div className="h-[200px] md:h-[250px] rounded-5 bg-current w-full mb-5 flex items-center justify-center">
        <Icon className="text-[70px] text-white" name={('shared/' + icon) as AnyIconName} />
      </div>
      <div className="text-primary flex-1 flex flex-col items-start">
        <h3 className="text-26-700 md:text-36-700 mb-2">{title}</h3>
        <p className="text-18-700 md:text-24-700 mb-1">Длительность: {duration}</p>
        <p className="text-16-700 md:text-18-700 ml-4 mb-2">Включает:</p>

        <ul className="list-disc text-16-700 md:text-18-700 ml-6 flex flex-col gap-1 mb-7">
          {benefits.map((benefit, index) => (
            // eslint-disable-next-line react/no-array-index-key -- it's ok in current case
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <Button className="mt-auto" text={price} preset={isPopular ? 'accent' : 'primary'} />
        <p>{isPopular}</p>
      </div>
    </article>
  )
}
