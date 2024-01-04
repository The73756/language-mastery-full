import { useAppSelector } from '@/hooks/app-dispatch'
import { selectIsAuthenticated } from '@/store/user/selectors/user-selector'
import { HeaderLink } from '@/types/header'
import { Routes } from '@/types/routes'

export const useHeaderLinks = () => {
  const isAuth = useAppSelector(selectIsAuthenticated)

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
