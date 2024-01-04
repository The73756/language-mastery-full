import { Metadata } from 'next'
import { RegistrationForm } from '@/components/registration-form'

export default function Auth() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-full">
      <RegistrationForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Language Mastery - Регистрация',
}
