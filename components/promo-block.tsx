import Image from 'next/image'
import { Button } from '@/components/shared/button'

interface PromoBlockProps {
  title: string
  subtitle: string
  buttonText: string
  imageUrl: string
}

export const PromoBlock = ({ subtitle, buttonText, title, imageUrl }: PromoBlockProps) => {
  return (
    <div className="relative text-white rounded-5 md:rounded-3xl overflow-hidden flex px-8 xl:px-32 max-md:py-10 h-[300px] md:h-[400px] items-center">
      <Image
        className="z-[-1] object-cover absolute inset-0 h-full"
        src={imageUrl}
        alt="Промо изображение"
        width={1592}
        height={400}
      />

      <div className="max-w-screen-sm max-md:flex max-md:h-full max-md:flex-col ">
        <h2 className="xl:text-48-700 md:text-36-700 text-26-700 line-clamp-3 text-ellipsis">
          {title}
        </h2>
        <p className="xl:text-32-700 md:text-24-700 text-18-700 md:mb-16 line-clamp-2 text-ellipsis">
          {subtitle}
        </p>
        <Button text={buttonText} className="max-md:mt-auto max-md:w-fit" />
      </div>
    </div>
  )
}
