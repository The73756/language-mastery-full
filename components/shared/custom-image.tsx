import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { CSSProperties, useState } from 'react'
import { Icon } from '@/components/shared/icon'

type CustomImageProps = ImageProps

export const CustomImage = ({ src, alt, width, height, className, ...props }: CustomImageProps) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setIsError(true)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const noImageClasses: CSSProperties = { height, width, maxWidth: '100%', maxHeight: '100%' }

  if (isError || !src) {
    return (
      <div
        className={clsx([
          className,
          'w-full flex items-center h-full justify-center text-white bg-custom-gradient',
        ])}
        title="Изображение не загружено"
        style={noImageClasses}
      >
        <Icon name="shared/no-image" className="text-[60px] md:text-[80px]" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-full" style={noImageClasses}>
      <Image
        src={src}
        alt={alt}
        {...props}
        className={clsx([className, isLoading && 'opacity-0'])}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
      />
      {isLoading && (
        <div
          className={clsx([
            'bg-custom-gradient bg-200% animate-gradient absolute inset-0 flex items-center text-white justify-center',
            className,
          ])}
          aria-hidden={true}
          style={noImageClasses}
        >
          <Icon name="shared/image" className="text-[40px] md:text-[60px]" />
        </div>
      )}
    </div>
  )
}
