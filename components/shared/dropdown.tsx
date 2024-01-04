'use client'

import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Icon } from '@/components/shared/icon'

export interface DropdownOption {
  id: number
  value: string
  label: string
}

interface DropdownProps {
  placeholder: string
  options: DropdownOption[]
  selectedOption: DropdownOption | null
  onSelect: (el: DropdownOption) => void
  isAccent?: boolean
  className?: string
}

export const Dropdown = ({
  placeholder,
  options,
  selectedOption,
  onSelect,
  isAccent,
  className,
}: DropdownProps) => {
  const buttonText = selectedOption ? selectedOption.label : placeholder

  return (
    <Listbox value={selectedOption} onChange={onSelect}>
      <div className={clsx(['relative', className])}>
        <Listbox.Button className="h-58 outline-2 outline-accent text-16-700 flex items-center justify-between hover:bg-primary-hover text-left px-4 transition-colors bg-primary text-white w-full rounded-2xl">
          <span className={selectedOption ? '' : 'opacity-80'}>{buttonText}</span>
          <Icon name="shared/arrow" className="ui-open:rotate-0 rotate-180" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`${
              isAccent ? 'bg-accent' : 'bg-primary'
            } absolute z-10 mt-1 w-full overflow-hidden rounded-2xl  py-1 shadow-xl text-16-400 focus:outline-none`}
          >
            {options.map((item) => {
              const optionClass = isAccent
                ? `relative ui-active:bg-accent-hover bg-accent hover:bg-accent-hover cursor-pointer text-white select-none py-2 px-4 ${
                    item.id === selectedOption?.id && 'bg-accent-hover/50'
                  }`
                : `relative ui-active:bg-primary-hover bg-primary hover:bg-primary-hover cursor-pointer text-white select-none py-2 px-4 ${
                    item.id === selectedOption?.id && 'bg-primary-hover/50'
                  }`

              return (
                <Listbox.Option key={item.id} className={optionClass} value={item}>
                  <span className="block truncate">{item.label}</span>
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
