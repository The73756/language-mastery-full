import { Metadata } from 'next'
import { AdminBlock } from '@/components/admin/admin-block'

export default function Admin() {
  return (
    <div className="container pt-12 lg:pt-20">
      <AdminBlock />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Language Mastery - Админ панель',
}
