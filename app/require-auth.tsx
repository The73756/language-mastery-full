import { redirect } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/user/selectors/user-selector'

export const RequireAuth = ({ children }: PropsWithChildren) => {
  const userData = useSelector(selectUser)

  useEffect(() => {
    if (userData._inited && !userData.authData) {
      return redirect('/')
    }
  }, [userData])

  return <>{children}</>
}
