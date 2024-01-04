'use client'

import { ChangeEvent, useState } from 'react'
import { Checkbox } from '@/components/shared/checkbox'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'
import { Input } from '@/components/shared/input'
import { BenefitsCard } from '@/types/benefits'

type AdminCardProps = BenefitsCard

export const AdminCard = ({
  title,
  icon,
  benefits,
  isPopular,
  price,
  duration,
}: AdminCardProps) => {
  const dropdownOptions: DropdownOption[] = [
    {
      id: 1,
      value: 'crown',
      label: 'Корона',
    },
    {
      id: 2,
      value: 'lightning',
      label: 'Молния',
    },
    {
      id: 3,
      value: 'cap',
      label: 'Шапка',
    },
  ]
  const selectedIcon = dropdownOptions.find((el) => el.value === icon) || null
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(selectedIcon)

  const [cardData, setCardData] = useState({
    title,
    icon,
    benefits,
    isPopular,
    price,
    duration,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="rounded-3xl max-md:p-4 max-xl:p-6 p-12 border-2 border-primary w-full flex flex-col gap-4">
      <Dropdown
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        options={dropdownOptions}
        placeholder="Иконка"
        isAccent
      />
      <Input placeholder="Заголовок" onChange={handleChange} name="title" value={cardData.title} />
      <Input
        placeholder="Длительность"
        onChange={handleChange}
        name="duration"
        value={cardData.duration}
      />
      <Input
        placeholder="Список приемуществ"
        onChange={handleChange}
        name="benefits"
        value={cardData.benefits}
      />
      <Input placeholder="Стоимость" onChange={handleChange} name="price" value={cardData.price} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="cursor-pointer hover:bg-primary-hover transition-colors flex gap-2 pl-4 pr-10 h-58 text-white text-16-700 rounded-2xl bg-primary items-center w-fit">
        <Checkbox />
        <span>Популярное</span>
      </label>
    </div>
  )
}
