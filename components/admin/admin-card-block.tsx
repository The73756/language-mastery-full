import { useForm } from 'react-hook-form'
import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { AdminCard } from '@/components/admin/admin-card'
import { Input } from '@/components/shared/input'
import { ArticleCard } from '@/types/article'

interface Inputs {
  title: string
}

export const AdminCardBlock = ({ cards, title }: ArticleCard) => {
  const { register } = useForm<Inputs>({
    defaultValues: {
      title,
    },
  })
  return (
    <AdminBlockWrapper title="Блок с тремя карточками" className="flex flex-col">
      <form className="mb-10">
        <Input
          register={register('title')}
          placeholder="Заголовок"
          className="mb-5 w-full sm:w-[360px]"
        />

        <div className="flex max-lg:flex-wrap gap-5 h-full ">
          {cards.map((card) => (
            <AdminCard key={card.id} {...card} />
          ))}
        </div>
      </form>

      <AdminBlockControl className="ml-auto" />
    </AdminBlockWrapper>
  )
}
