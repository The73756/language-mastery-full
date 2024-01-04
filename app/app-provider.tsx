import { PropsWithChildren, useEffect } from 'react'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { userActions } from '@/store/user/slice/user-slice'

export const AppProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initUserData())
  }, [dispatch])

  return children
}
