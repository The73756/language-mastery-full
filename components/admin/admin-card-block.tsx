import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { AdminCard } from '@/components/admin/admin-card'
import { Input } from '@/components/shared/input'
import { BenefitsCard } from '@/types/benefits'

export const AdminCardBlock = () => {
  const cardData: BenefitsCard[] = [
    {
      title: '',
      icon: 'lightning',
      duration: '',
      price: '',
      isPopular: false,
      benefits: [''],
    },
    {
      title: '',
      icon: 'lightning',
      duration: '',
      price: '',
      isPopular: false,
      benefits: [''],
    },
    {
      title: '',
      icon: 'lightning',
      duration: '',
      price: '',
      isPopular: false,
      benefits: [''],
    },
  ]

  return (
    <AdminBlockWrapper title="Блок с тремя карточками" className="flex flex-col">
      <form className="mb-10">
        <Input placeholder="Заголовок" className="mb-5 w-full sm:w-[360px]" />

        <div className="flex max-lg:flex-wrap gap-5 h-full ">
          {cardData.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <AdminCard key={index} {...card} />
          ))}
        </div>
      </form>

      <AdminBlockControl className="ml-auto" />
    </AdminBlockWrapper>
  )
}
