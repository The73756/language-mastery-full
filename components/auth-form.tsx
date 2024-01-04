'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/shared/button'
import { FormWrapper } from '@/components/shared/form-wrapper'
import { Input } from '@/components/shared/input'
import { InputPassword } from '@/components/shared/input-password'
import { passwordRule, usernameRule } from '@/helpers/validate'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { loginByUsername } from '@/store/user/service/login-by-username'
import { Routes } from '@/types/routes'

interface Inputs {
  username: string
  password: string
}

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await dispatch(loginByUsername(data))
      router.push(Routes.HOME)
    } catch (error) {
      console.log('auth-form [onSubmit]', error)
      alert('Ошибка регистрации')
    }
  }

  return (
    <FormWrapper title="Вход" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 md:gap-5 mb-7">
        <Input
          register={register('username', usernameRule)}
          error={errors.username}
          preset="white"
          type="text"
          autoComplete="name"
          placeholder="Имя пользователя"
        />
        <InputPassword
          register={register('password', passwordRule)}
          error={errors.password}
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
