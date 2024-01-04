import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { InputHTMLAttributes, PropsWithChildren } from 'react'

const inputVariants = cva(
  'h-58 rounded-2xl overflow-hidden text-16-700 block outline-accent focus-within:outline',
  {
    variants: {
      preset: {
        white: 'text-primary bg-white',
        primary: 'bg-primary text-white ',
      },
    },
    defaultVariants: {
      preset: 'primary',
    },
  },
)

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  inputClass?: string
}

export const Input = ({
  disabled,
  preset,
  className,
  inputClass,
  children,
  ...props
}: PropsWithChildren<InputProps>) => {
  return (
    <label className={inputVariants({ preset, className })}>
      <input
        className={clsx([
          'focus:outline-none px-4 w-full h-full placeholder:text-current placeholder:opacity-85 bg-transparent',
          inputClass,
        ])}
        {...props}
      />
      {children}
    </label>
  )
}
