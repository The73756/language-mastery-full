'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '@/components/shared/button'
import { FormWrapper } from '@/components/shared/form-wrapper'
import { Input } from '@/components/shared/input'
import { InputPassword } from '@/components/shared/input-password'
import { passwordRule, usernameRule } from '@/helpers/validate'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { registrationByUsername } from '@/store/user/service/registration-by-username'
import { Routes } from '@/types/routes'

interface Inputs {
  username: string
  password: string
  confirmPassword: string
}

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmit = async (data: Inputs) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Пароли не совпадают!')
      return
    }

    const authPromise = dispatch(
      registrationByUsername({ username: data.username, password: data.password }),
    ).unwrap()

    try {
      await toast.promise(authPromise, {
        loading: 'Регистрация...',
        error: 'Произошла ошибка, попробуйте позже!',
        success: (user) => `Добро пожаловать, ${user.username}!`,
      })

      router.push(Routes.HOME)
    } catch (error) {
      console.log('auth-form [onSubmit]', error)
    }
  }

  return (
    <FormWrapper title="Регистрация" onSubmit={handleSubmit(onSubmit)}>
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
          autoComplete="new-password"
          placeholder="Пароль"
        />
        <InputPassword
          register={register('confirmPassword', {
            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'Пароли не совпадают!'
              }
            },
          })}
          error={errors.confirmPassword}
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
