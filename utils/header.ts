import { HeaderLink } from '@/types/header'
import { Routes } from '@/types/routes'

export const getHeaderLinks = () => {
  const isAuth = true

  const links: HeaderLink[] = [
    {
      path: Routes.AUTH,
      text: 'Авторизация',
    },
  ]

  const authLinks: HeaderLink[] = [
    {
      path: Routes.ADMIN,
      text: 'Админ панель',
    },
    {
      path: Routes.HOME,
      text: 'Главная',
    },
  ]

  return isAuth ? authLinks : links
}
