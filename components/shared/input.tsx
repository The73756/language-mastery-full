import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { InputHTMLAttributes, PropsWithChildren } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { ModifiedBadge } from '@/components/shared/modified-badge'

const inputVariants = cva(
  'h-58 rounded-2xl overflow-hidden text-16-700 block outline-accent focus-within:outline',
  {
    variants: {
      preset: {
        white: 'text-primary bg-white',
        primary: 'bg-primary text-white ',
      },
      isError: {
        true: 'text-[#e64646] ',
        false: '',
      },
      isAdmin: {
        true: 'text-opacity-70 focus-within:placeholder-white focus-within:text-white',
        false: '',
      },
      isModified: {
        true: 'text-opacity-[100%]',
        false: '',
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
  error?: FieldError
  register: UseFormRegisterReturn<string>
  isModified?: boolean
}

export const Input = ({
  disabled,
  preset,
  className,
  inputClass,
  children,
  onChange,
  error,
  register,
  isAdmin,
  isModified,
  ...props
}: PropsWithChildren<InputProps>) => {
  return (
    <div className="relative">
      <ModifiedBadge isModified={Boolean(isModified)} />

      <label
        className={inputVariants({
          preset,
          className,
          isError: Boolean(error),
          isAdmin,
          isModified,
        })}
      >
        <input
          {...register}
          className={clsx([
            'focus:outline-none px-4 w-full h-full placeholder:text-current placeholder:opacity-85 bg-transparent',
            inputClass,
          ])}
          {...props}
        />
        {children}
      </label>
      {error && <p className=" text-error-light text-14-400 mt-1">{error.message}</p>}
    </div>
  )
}
