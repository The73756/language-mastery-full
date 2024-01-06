'use client'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { Checkbox } from '@/components/shared/checkbox'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'
import { Input } from '@/components/shared/input'
import { ModifiedBadge } from '@/components/shared/modified-badge'
import { Textarea } from '@/components/shared/textarea'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { updateArticleCardById } from '@/store/service/update-article-card'
import { BenefitsCard, CardIcon } from '@/types/benefits'

interface AdminCardProps extends BenefitsCard {
  articleId: string
}

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
    id: '1',
    value: 'crown',
    label: 'Корона',
  },
  {
    id: '2',
    value: 'lightning',
    label: 'Молния',
  },
  {
    id: '3',
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
  articleId,
  id,
}: AdminCardProps) => {
  const benefitsString = benefits.join('; \n\n')
  const defaultIcon = dropdownOptions.find((el) => el.value === icon) || null
  const dispatch = useAppDispatch()

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { dirtyFields, isDirty },
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

  const handleUpdateCard = async (cardData: Inputs) => {
    try {
      const benefits = cardData.benefits.split(';').map((el) => el.trim())
      const data = { ...cardData, benefits, icon: cardData.icon?.value as CardIcon }

      console.log('admin-card [handleUpdateCard]', data)
      await dispatch(updateArticleCardById({ articleId, cardId: id, cardData: data }))
      reset(cardData)
    } catch (error) {
      console.log('admin-promo-block [handleUpdateArticle]', error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdateCard)}
      className="rounded-3xl max-md:p-4 max-xl:p-6 p-12 border-2 border-primary w-full flex flex-col gap-4"
    >
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

      <AdminBlockControl
        className="ml-auto"
        handleReject={() => reset()}
        isModified={isDirty}
        showBlockControl={false}
      />
    </form>
  )
}
