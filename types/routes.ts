export const Routes = {
  HOME: '/',
  AUTH: '/auth',
  REGISTRATION: '/registration',

  ADMIN: '/admin',
} as const

export const ProtectedRoutes: string[] = [Routes.ADMIN]
