'use client'

import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/shared/checkbox'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'
import { Input } from '@/components/shared/input'
import { ModifiedBadge } from '@/components/shared/modified-badge'
import { Textarea } from '@/components/shared/textarea'
import { BenefitsCard } from '@/types/benefits'

type AdminCardProps = BenefitsCard

interface Inputs {
  title: string
  benefits: string
  isPopular: boolean
  price: string
  duration: string
  icon: DropdownOption | null
}

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

export const AdminCard = ({
  title,
  icon,
  benefits,
  isPopular,
  price,
  duration,
}: AdminCardProps) => {
  const benefitsString = benefits.join('; \n\n')
  const defaultIcon = dropdownOptions.find((el) => el.value === icon) || null

  const {
    register,
    watch,
    setValue,
    formState: { dirtyFields },
  } = useForm<Inputs>({
    defaultValues: {
      title,
      isPopular,
      benefits: benefitsString,
      price,
      duration,
      icon: defaultIcon,
    },
  })

  const selectedOption = watch('icon')

  const handleSelect = (el: DropdownOption) => {
    setValue('icon', el, { shouldDirty: true })
  }

  return (
    <div className="rounded-3xl max-md:p-4 max-xl:p-6 p-12 border-2 border-primary w-full flex flex-col gap-4">
      <Dropdown
        isModified={Boolean(dirtyFields.icon)}
        selectedOption={selectedOption}
        onSelect={handleSelect}
        options={dropdownOptions}
        placeholder="Иконка"
        isAccent
      />
      <Input
        isAdmin
        isModified={dirtyFields.title}
        register={register('title')}
        placeholder="Заголовок"
      />
      <Input
        isAdmin
        isModified={dirtyFields.duration}
        register={register('duration')}
        placeholder="Длительность"
      />
      <Textarea
        isAdmin
        isModified={dirtyFields.benefits}
        register={register('benefits')}
        placeholder="Список приемуществ через ';'"
      />

      <Input
        isAdmin
        isModified={dirtyFields.price}
        register={register('price')}
        placeholder="Стоимость"
      />

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="cursor-pointer relative hover:bg-primary-hover transition-colors flex gap-2 pl-4 pr-10 h-58 text-white text-16-700 rounded-2xl bg-primary items-center w-fit">
        <ModifiedBadge isModified={Boolean(dirtyFields.isPopular)} />
        <Checkbox register={register('isPopular')} />
        <span>Популярное</span>
      </label>
    </div>
  )
}
