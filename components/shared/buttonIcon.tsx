import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { AnyIconName, Icon } from '@/components/shared/icon'

const buttonIconVariants = cva(
  'w-10 flex items-center justify-center h-10 rounded-full text-white text-[18px] transition-colors',
  {
    variants: {
      preset: {
        accent: 'bg-accent outline-primary hover:bg-accent-hover',
        primary: 'bg-primary outline-accent hover:bg-primary-hover',
      },
      disabled: {
        true: 'bg-gray cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      preset: 'primary',
      disabled: false,
    },
  },
)

interface ButtonWithIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
  iconName: AnyIconName
  iconClass?: string
}

export const ButtonIcon = ({
  iconName,
  disabled,
  preset,
  className,
  iconClass,
  ...props
}: ButtonWithIconProps) => {
  return (
    <button
      type="button"
      className={buttonIconVariants({ preset, disabled })}
      disabled={Boolean(disabled)}
      {...props}
    >
      <Icon className={iconClass} name={iconName} />
    </button>
  )
}
