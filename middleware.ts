import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { USER_COOKIE_KEY } from '@/constants/local-storage'
import { ProtectedRoutes } from '@/types/routes'

export function middleware(request: NextRequest) {
  if (ProtectedRoutes.includes(request.nextUrl.pathname)) {
    const isAuth = request.cookies.get(USER_COOKIE_KEY)
    if (!isAuth?.value) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
}
