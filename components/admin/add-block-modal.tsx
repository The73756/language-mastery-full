import { useState } from 'react'
import { Button } from '@/components/shared/button'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { addArticle } from '@/store/service/add-article'
import { ArticleType } from '@/types/article'

const dropdownOptions: DropdownOption[] = [
  {
    id: '1',
    label: 'Промо блок',
    value: ArticleType.PROMO,
  },
  {
    id: '2',
    label: 'Блок с текстом',
    value: ArticleType.TEXT,
  },
  {
    id: '3',
    label: 'Блок с тремя карточками',
    value: ArticleType.CARD,
  },
]

export const AddBlockModal = () => {
  const dispatch = useAppDispatch()
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null)
  const [isError, setIsError] = useState(false)

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option)
  }

  const handleAddBlock = () => {
    if (!selectedOption) {
      setIsError(true)
      return
    }

    dispatch(addArticle({ articleType: selectedOption.value as keyof typeof ArticleType }))
  }

  return (
    <div>
      <h2 className="text-32-700 md:text-48-700 mb-5 text-primary">Добавить блок</h2>
      <div className="mb-5">
        <Dropdown
          placeholder="Выберите тип блока"
          options={dropdownOptions}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
        {isError && <p className=" text-error text-14-400 mt-1">Выберите тип</p>}
      </div>

      <Button onClick={handleAddBlock} preset="accent" text="Добавить" />
    </div>
  )
}
