'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/components/shared/button'
import { FormWrapper } from '@/components/shared/form-wrapper'
import { Input } from '@/components/shared/input'
import { InputPassword } from '@/components/shared/input-password'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { selectUserPassword, selectUserUsername } from '@/store/user/selectors/user-selector'
import { registrationByUsername } from '@/store/user/service/registration-by-username'
import { userActions } from '@/store/user/slice/user-slice'
import { Routes } from '@/types/routes'

export const RegistrationForm = () => {
  const username = useSelector(selectUserUsername)
  const password = useSelector(selectUserPassword)
  const [confirmPassword, setConfirmPassword] = useState('')

  const router = useRouter()
  const dispatch = useAppDispatch()

  const onChangeUsername = (value: string) => {
    dispatch(userActions.setUsername(value))
  }

  const onChangePassword = (value: string) => {
    dispatch(userActions.setPassword(value))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await dispatch(registrationByUsername({ username, password }))
      router.push(Routes.HOME)
    } catch (error) {
      console.log('registration-form [onSubmit]', error)
      alert('Ошибка регистрации')
    }
  }

  return (
    <FormWrapper title="Регистрация" onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 md:gap-5 mb-7">
        <Input
          value={username}
          onChange={onChangeUsername}
          preset="white"
          type="text"
          autoComplete="name"
          placeholder="Имя пользователя"
        />
        <InputPassword
          value={password}
          onChange={onChangePassword}
          preset="white"
          type="password"
          autoComplete="new-password"
          placeholder="Пароль"
        />
        <InputPassword
          value={confirmPassword}
          onChange={setConfirmPassword}
          hideIcon
          preset="white"
          type="password"
          autoComplete="new-password"
          placeholder="Повторите пароль"
        />
      </div>

      <div className="text-16-400 flex-wrap gap-5 text-white flex justify-between items-center">
        <div>
          <p>Уже зарегистрированы?</p>
          <Link href={Routes.AUTH} className="underline hover:text-light-blue transition-colors">
            Войти
          </Link>
        </div>

        <Button text="Зарегистрироваться" preset="accent" />
      </div>
    </FormWrapper>
  )
}
