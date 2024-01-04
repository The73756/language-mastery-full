import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
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

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  text: string
}

export const Button = ({ text, disabled, preset, className, ...props }: ButtonProps) => {
  return (
    <button
      disabled={Boolean(disabled)}
      className={buttonVariants({ preset, disabled, className })}
      {...props}
    >
      {text}
    </button>
  )
}
