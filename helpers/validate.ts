import { RegisterOptions } from 'react-hook-form'

export const usernameRule: RegisterOptions = {
  required: 'Это обязательное поле!',
  minLength: {
    value: 2,
    message: 'Минимальная длина 2 символа!',
  },
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message: 'Разрешены только латинские буквы, цифры и _',
  },
}

export const passwordRule: RegisterOptions = {
  required: 'Это обязательное поле!',
  minLength: {
    value: 8,
    message: 'Минимальная длина 8 символов!',
  },
}
