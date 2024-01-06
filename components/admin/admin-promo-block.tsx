import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { Input } from '@/components/shared/input'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { updateArticleById } from '@/store/service/update-article'
import { ArticlePromo } from '@/types/article'

interface Inputs {
  imageUrl: string
  title: string
  subtitle: string
  buttonText: string
}

export const AdminPromoBlock = ({ imageUrl, title, subtitle, buttonText, id }: ArticlePromo) => {
  const dispatch = useAppDispatch()
  const {
    register,
    formState: { dirtyFields, isDirty },
    reset,
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      imageUrl,
      title,
      subtitle,
      buttonText,
    },
  })

  const handleUpdateArticle = async (articleData: Inputs) => {
    try {
      await dispatch(updateArticleById({ id, articleData }))
      reset(articleData)
    } catch (error) {
      console.log('admin-promo-block [handleUpdateArticle]', error)
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <AdminBlockWrapper title="Промо блок">
      <form className="flex flex-col gap-10 md:gap-3" onSubmit={handleSubmit(handleUpdateArticle)}>
        <div className="flex max-lg:flex-wrap gap-4 lg:gap-5 *:flex-[100%] md:*:flex-[calc(50%-40px)] lg:*:w-full">
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
          <Input
            isAdmin
            isModified={dirtyFields.buttonText}
            register={register('buttonText')}
            placeholder="Стоимость"
          />
        </div>

        <AdminBlockControl isModified={isDirty} className="ml-auto" handleReject={() => reset()} />
      </form>
    </AdminBlockWrapper>
  )
}
