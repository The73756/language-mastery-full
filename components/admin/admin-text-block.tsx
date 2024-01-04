'use client'

import { useState } from 'react'
import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'
import { Input } from '@/components/shared/input'
import { Textarea } from '@/components/shared/textarea'

export const AdminTextBlock = () => {
  const dropdownOptions: DropdownOption[] = [
    { id: 1, value: 'left', label: 'Изображение слева' },
    { id: 2, value: 'right', label: 'Изображение справа' },
  ]

  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null)

  const handleSelect = (el: DropdownOption) => {
    setSelectedOption(el)
  }

  return (
    <AdminBlockWrapper title="Блок с изображением и текстом">
      <form className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-5">
          <div className="flex w-full max-lg:flex-wrap gap-4 lg:gap-5 *:flex-[100%] md:*:flex-[calc(50%-40px)] lg:*:w-full">
            <Input placeholder="Ссылка на изображение" />
            <Input placeholder="Заголовок" />
            <Input placeholder="Подзаголовок" />
            <Dropdown
              selectedOption={selectedOption}
              onSelect={handleSelect}
              options={dropdownOptions}
              placeholder="Направление"
            />
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex max-md:flex-wrap lg:w-1/2 gap-5 *:w-full">
              <Input placeholder="Кнопка действия текст" />
              <Input placeholder="Кнопка действия ссылка" />
            </div>
            <div className="flex flex-wrap h-full justify-between items-end">
              <Textarea placeholder="Текст" className="block w-full max-lg:mb-10 lg:w-1/2" />
              <AdminBlockControl className="ml-auto" />
            </div>
          </div>
        </div>
      </form>
    </AdminBlockWrapper>
  )
}
