import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'
import { Icon } from '@/components/shared/icon'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClass?: string
}

export const Checkbox = ({ wrapperClass, ...props }: CheckboxProps) => {
  return (
    <label
      className={clsx([
        'relative w-7 h-7 rounded-full flex items-center cursor-pointer focus-within:outline outline-accent outline-2 outline-offset-2 transition-colors',
        wrapperClass,
      ])}
    >
      <input {...props} type="checkbox" className="peer sr-only" />
      <span className="absolute peer-checked:bg-accent border-2 rounded-full w-7 h-7 text-transparent peer-checked:text-white border-accent inset-0 text-white transition-colors flex items-center justify-center bg-transparent" />
      <Icon
        name="shared/check"
        className="absolute bottom-1/2 right-1/2 text-[14px] translate-x-1/2 translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"
      />
    </label>
  )
}
