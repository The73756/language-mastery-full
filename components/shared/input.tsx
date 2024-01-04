import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react'

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
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    VariantProps<typeof inputVariants> {
  inputClass?: string
  onChange?: (value: string) => void
}

export const Input = ({
  disabled,
  preset,
  className,
  inputClass,
  children,
  onChange,
  ...props
}: PropsWithChildren<InputProps>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <label className={inputVariants({ preset, className })}>
      <input
        onChange={handleChange}
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
