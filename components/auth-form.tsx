'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/components/shared/button'
import { FormWrapper } from '@/components/shared/form-wrapper'
import { Input } from '@/components/shared/input'
import { InputPassword } from '@/components/shared/input-password'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { selectUserPassword, selectUserUsername } from '@/store/user/selectors/user-selector'
import { loginByUsername } from '@/store/user/service/login-by-username'
import { userActions } from '@/store/user/slice/user-slice'
import { Routes } from '@/types/routes'

export const AuthForm = () => {
  const username = useSelector(selectUserUsername)
  const password = useSelector(selectUserPassword)
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
      await dispatch(loginByUsername({ username, password }))
      router.push(Routes.HOME)
    } catch (error) {
      console.log('auth-form [onSubmit]', error)
      alert('Ошибка регистрации')
    }
  }

  return (
    <FormWrapper title="Вход" onSubmit={onSubmit}>
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
          autoComplete="current-password"
          placeholder="Пароль"
        />
      </div>

      <div className="text-16-400 text-white flex-wrap gap-5 flex justify-between items-center">
        <div>
          <p>Еще не зарегистрированы?</p>
          <Link
            href={Routes.REGISTRATION}
            className="underline hover:text-light-blue transition-colors"
          >
            Регистрация
          </Link>
        </div>

        <Button text="Войти" preset="accent" />
      </div>
    </FormWrapper>
  )
}
