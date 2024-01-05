'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import { ModifiedBadge } from '@/components/shared/modified-badge'

const textareaVariants = cva(
  'py-5 px-4 resize-none w-full rounded-2xl scrollbar-thumb-accent scrollbar-thin scrollbar-track-light-blue hover:scrollbar-thumb-accent-hover scrollbar scrollbar-thumb-rounded-full outline-accent min-h-58 flex items-center text-white placeholder:text-white/80 bg-primary text-16-700 font-montserrat placeholder:font-montserrat',
  {
    variants: {
      isAdmin: {
        true: 'text-opacity-70 focus-within:placeholder-white focus-within:text-white',
        false: '',
      },
      isModified: {
        true: 'text-opacity-[100%]',
        false: '',
      },
    },
  },
)

interface TextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  className?: string
  register: UseFormRegisterReturn<string>
}

export const Textarea = ({
  className,
  placeholder,
  register,
  isModified,
  isAdmin,
}: TextareaProps) => {
  return (
    <span className="relative w-full ">
      <ModifiedBadge isModified={Boolean(isModified)} />
      <TextareaAutosize
        {...register}
        className={textareaVariants({ isAdmin, className, isModified })}
        placeholder={placeholder}
      />
    </span>
  )
}
