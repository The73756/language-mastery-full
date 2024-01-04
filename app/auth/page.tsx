import { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'

export default function Auth() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-full">
      <AuthForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Language Mastery - Вход',
}
