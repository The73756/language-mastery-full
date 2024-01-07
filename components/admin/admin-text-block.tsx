'use client'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { Dropdown, DropdownOption } from '@/components/shared/dropdown'
import { Input } from '@/components/shared/input'
import { Textarea } from '@/components/shared/textarea'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { updateArticleById } from '@/store/service/update-article'
import { ArticleText } from '@/types/article'

interface Inputs {
  imageUrl: string
  title: string
  subtitle: string
  buttonText: string
  direction: DropdownOption | null
  buttonLink: string
  text: string
}

const dropdownOptions: DropdownOption[] = [
  { id: '1', value: 'left', label: 'Изображение слева' },
  { id: '2', value: 'right', label: 'Изображение справа' },
]

export const AdminTextBlock = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  direction,
  text,
  buttonLink,
  position,
  id,
}: ArticleText) => {
  const dispatch = useAppDispatch()
  const defaultOption = dropdownOptions.find((el) => el.value === direction) || null
  const textString = text?.join('\n')

  const {
    register,
    setValue,
    watch,
    formState: { dirtyFields, isDirty },
    reset,
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      imageUrl,
      title,
      subtitle,
      buttonText,
      text: textString,
      buttonLink,
      direction: defaultOption,
    },
  })

  const selectedOption = watch('direction')

  const handleSelect = (el: DropdownOption) => {
    setValue('direction', el, { shouldDirty: true })
  }

  const handleUpdateArticle = async (articleData: Inputs) => {
    try {
      const textArray = articleData.text.split('\n')
      const data = { ...articleData, direction: articleData.direction?.value, text: textArray }

      await dispatch(updateArticleById({ id, articleData: data }))
      reset(articleData)
    } catch (error) {
      console.log('admin-text-block [handleUpdateArticle]', error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <AdminBlockWrapper title="Блок с изображением и текстом">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleUpdateArticle)}>
        <div className="flex flex-wrap gap-5">
          <div className="flex w-full max-lg:flex-wrap gap-4 lg:gap-5 *:flex-[100%] md:*:flex-[calc(50%-40px)] lg:*:w-full">
            <Input
              isAdmin
              isModified={dirtyFields.imageUrl}
              register={register('imageUrl')}
              placeholder="Ссылка на изображение"
            />
            <Input
              isAdmin
              isModified={dirtyFields.title}
              register={register('title')}
              placeholder="Заголовок"
            />
            <Input
              isAdmin
              isModified={dirtyFields.subtitle}
              register={register('subtitle')}
              placeholder="Подзаголовок"
            />
            <Dropdown
              selectedOption={selectedOption}
              onSelect={handleSelect}
              options={dropdownOptions}
              placeholder="Направление"
              isModified={Boolean(dirtyFields.direction)}
            />
          </div>

          <div className="flex w-full flex-col gap-5">
            <div className="flex max-md:flex-wrap lg:w-1/2 gap-5 *:w-full">
              <Input
                isAdmin
                isModified={dirtyFields.buttonText}
                register={register('buttonText')}
                placeholder="Кнопка действия текст"
              />
              <Input
                isAdmin
                isModified={dirtyFields.buttonLink}
                register={register('buttonLink')}
                placeholder="Кнопка действия ссылка"
              />
            </div>
            <div className="flex flex-wrap h-full justify-between items-end">
              <div className="w-full max-lg:mb-10 lg:w-1/2">
                <Textarea
                  isAdmin
                  isModified={dirtyFields.text}
                  register={register('text')}
                  placeholder="Текст"
                  className="w-full"
                />
              </div>

              <AdminBlockControl
                articleId={id}
                position={position}
                isModified={isDirty}
                className="ml-auto"
                handleReject={() => reset}
              />
            </div>
          </div>
        </div>
      </form>
    </AdminBlockWrapper>
  )
}
