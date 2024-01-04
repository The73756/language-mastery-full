'use client'

import { useState } from 'react'
import { Icon } from '@/components/shared/icon'
import { Input, InputProps } from '@/components/shared/input'

interface PasswordInputProps extends InputProps {
  hideIcon?: boolean
}

export const InputPassword = ({ hideIcon = false, ...props }: PasswordInputProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const togglePasswordVisibility = () => {
    setIsPasswordHidden((prevState) => !prevState)
  }
  return (
    <Input {...props} type={isPasswordHidden ? 'password' : 'text'} className="flex gap-2">
      <button
        className="pr-4"
        hidden={hideIcon}
        title={isPasswordHidden ? 'Показать пароль' : 'Скрыть пароль'}
        onClick={togglePasswordVisibility}
        type="button"
      >
        <Icon className="text-2xl" name={isPasswordHidden ? 'shared/eye-closed' : 'shared/eye'} />
      </button>
    </Input>
  )
}
