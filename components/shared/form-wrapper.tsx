import { FormEvent, PropsWithChildren } from 'react'

interface FormWrapperProps {
  title: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export const FormWrapper = ({ title, onSubmit, children }: PropsWithChildren<FormWrapperProps>) => {
  return (
    <form
      className="bg-primary py-8 md:pt-12 md:pb-10 rounded-5 w-full max-w-[95%] md:max-w-[90%] lg:max-w-[1000px] px-6 md:px-16 lg:px-32"
      onSubmit={onSubmit}
    >
      <h1 className="mb-9 text-center text-36-700 md:text-42-700 text-white">{title}</h1>
      {children}
    </form>
  )
}
