import { PropsWithChildren, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { userActions } from '@/store/user/slice/user-slice'

export const AppProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initUserData())
  }, [dispatch])

  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'text-16-700 font-montserrat',
          style: { color: '#4268b1' },
          duration: 5000,
        }}
      />
    </>
  )
}
