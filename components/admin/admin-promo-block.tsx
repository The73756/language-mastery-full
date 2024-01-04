import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { Input } from '@/components/shared/input'

export const AdminPromoBlock = () => {
  return (
    <AdminBlockWrapper title="Промо блок">
      <form className="flex flex-col gap-10 md:gap-3">
        <div className="flex max-lg:flex-wrap gap-4 lg:gap-5 *:flex-[100%] md:*:flex-[calc(50%-40px)] lg:*:w-full">
          <Input placeholder="Ссылка на изображение" />
          <Input placeholder="Заголовок" />
          <Input placeholder="Подзаголовок" />
          <Input placeholder="Стоимость" />
        </div>

        <AdminBlockControl className="ml-auto" />
      </form>
    </AdminBlockWrapper>
  )
}
