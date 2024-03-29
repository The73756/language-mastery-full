import clsx from 'clsx'
import { ButtonLink } from '@/components/shared/button-link'
import { CustomImage } from '@/components/shared/custom-image'
import { ArticleText } from '@/types/article'

export const TextBlock = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
  text,
  direction,
}: ArticleText) => {
  return (
    <div>
      <h2 className="text-36-700 md:text-48-700 text-primary mb-5">{title}</h2>
      <div
        className={clsx([
          'flex gap-8 max-lg:flex-wrap',
          direction === 'right' && 'flex-row-reverse',
        ])}
      >
        <CustomImage
          className="rounded-5 min-w-0 md:min-w-[512px] h-full object-cover max-xl:w-auto max-lg:h-full max-lg:w-[100%!important]"
          src={imageUrl || ''}
          alt={'изображение для ' + title}
          width={512}
          height={512}
        />

        <div className="flex flex-col">
          <h3 className="text-24-700 xl:text-26-700 mb-4 xl:mb-6 text-primary">{subtitle}</h3>
          <div className="flex flex-col gap-4 text-20-400 xl:text-24-400 text-primary">
            {text?.map((text, index) => (
              // eslint-disable-next-line react/no-array-index-key -- it's ok in current case
              <p key={index}>{text}</p>
            ))}
          </div>
          <ButtonLink
            className="mt-auto w-fit max-xl:mt-4"
            text={buttonText || ''}
            href={buttonLink || ''}
          />
        </div>
      </div>
    </div>
  )
}
