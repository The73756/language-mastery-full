import { redirect } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '@/store/user/selectors/user-selector'

export const RequireAuth = ({ children }: PropsWithChildren) => {
  const auth = useSelector(selectIsAuthenticated)

  useEffect(() => {
    if (!auth) {
      return redirect('/')
    }
  }, [auth])

  if (!auth) {
    return null
  }

  return <>{children}</>
}
