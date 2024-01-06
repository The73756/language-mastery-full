import { cva, VariantProps } from 'class-variance-authority'
import { AnchorHTMLAttributes } from 'react'

const buttonLinkVariants = cva(
  'py-2.5 md:py-[18px] px-10 md:px-16 rounded-full text-white text-16-700 md:text-24-700 transition-colors',
  {
    variants: {
      preset: {
        accent: 'bg-accent hover:bg-accent-hover',
        primary: 'bg-primary hover:bg-primary-hover',
      },
      disabled: {
        true: 'bg-gray cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      preset: 'accent',
      disabled: false,
    },
  },
)

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'disabled'>,
    VariantProps<typeof buttonLinkVariants> {
  text: string
  href: string
}

export const ButtonLink = ({
  text,
  disabled,
  preset,
  className,
  href,
  ...props
}: ButtonLinkProps) => {
  return (
    <>
      {text && (
        <a href={href} className={buttonLinkVariants({ preset, disabled, className })} {...props}>
          {text}
        </a>
      )}
    </>
  )
}
