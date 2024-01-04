'use client'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppProvider } from '@/app/app-provider'
import { AppStore, makeStore } from '@/store/config'

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <AppProvider>{children}</AppProvider>
    </Provider>
  )
}
