'use client'

import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export const Textarea = ({ className, placeholder }: TextareaProps) => {
  return (
    <TextareaAutosize
      className={clsx([
        'py-5 px-4 resize-none rounded-2xl outline-accent min-h-58 flex items-center text-white placeholder:text-white/80 bg-primary text-16-700 font-montserrat placeholder:font-montserrat',
        className,
      ])}
      placeholder={placeholder}
    />
  )
}
