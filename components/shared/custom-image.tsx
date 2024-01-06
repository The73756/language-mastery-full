import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { Icon } from '@/components/shared/icon'

type CustomImageProps = ImageProps

export const CustomImage = ({ src, alt, width, height, className, ...props }: CustomImageProps) => {
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    setIsError(true)
  }

  return (
    <>
      {isError || !src ? (
        <div
          className={clsx([
            className,
            'w-full flex items-center h-full justify-center text-white bg-custom-gradient',
          ])}
          title="Изображение не загружено"
          style={{ height }}
        >
          <Icon name="shared/no-image" className="text-[80px]" />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          {...props}
          className={className}
          width={width}
          height={height}
          onError={() => handleError}
        />
      )}
    </>
  )
}
