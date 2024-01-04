import Link from 'next/link'
import { Button } from '@/components/shared/button'
import { FormWrapper } from '@/components/shared/form-wrapper'
import { Input } from '@/components/shared/input'
import { InputPassword } from '@/components/shared/input-password'
import { Routes } from '@/types/routes'

export const AuthForm = () => {
  return (
    <FormWrapper title="Вход">
      <div className="flex flex-col gap-3 md:gap-5 mb-7">
        <Input preset="white" type="text" autoComplete="name" placeholder="Имя пользователя" />
        <InputPassword preset="white" autoComplete="current-password" placeholder="Пароль" />
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
