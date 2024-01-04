import { useState } from 'react'
import { Button } from '@/components/shared/button'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'

const dropdownOptions: DropdownOption[] = [
  {
    id: 1,
    label: 'Промо блок',
    value: 'promo',
  },
  {
    id: 2,
    label: 'Блок с текстом',
    value: 'promo',
  },
  {
    id: 3,
    label: 'Блок с тремя карточками',
    value: 'promo',
  },
]

export const AddBlockModal = () => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null)

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option)
  }

  return (
    <div>
      <h2 className="text-32-700 md:text-48-700 mb-5 text-primary">Добавить блок</h2>
      <Dropdown
        placeholder="Выберите тип блока"
        options={dropdownOptions}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        className="mb-5"
      />
      <Button preset="accent" text="Добавить" />
    </div>
  )
}
