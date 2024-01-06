import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { AdminCard } from '@/components/admin/admin-card'
import { Input } from '@/components/shared/input'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { updateArticleById } from '@/store/service/update-article'
import { ArticleCard } from '@/types/article'

interface Inputs {
  title: string
}

export const AdminCardBlock = ({ cards, title, id }: ArticleCard) => {
  const dispatch = useAppDispatch()
  const {
    register,
    reset,
    handleSubmit,
    formState: { dirtyFields, isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      title,
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
    <AdminBlockWrapper title="Блок с тремя карточками" className="flex flex-col">
      <div className="mb-10">
        <form onSubmit={handleSubmit(handleUpdateArticle)}>
          <div className="mb-5 w-full sm:w-[360px]">
            <Input
              isAdmin
              isModified={dirtyFields.title}
              register={register('title')}
              placeholder="Заголовок"
            />
          </div>
        </form>

        <div className="flex max-lg:flex-wrap gap-5 h-full ">
          {cards.map((card) => (
            <AdminCard key={card.id} articleId={id} {...card} />
          ))}
        </div>
      </div>

      <AdminBlockControl
        handleAccept={handleSubmit(handleUpdateArticle)}
        handleReject={() => reset}
        isModified={isDirty}
        className="ml-auto"
      />
    </AdminBlockWrapper>
  )
}
