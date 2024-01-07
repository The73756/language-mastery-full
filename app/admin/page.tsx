import { Metadata } from 'next'
import { AdminBlock } from '@/components/admin/admin-block'
import { Article } from '@/types/article'

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/articles?_sort=position', {
    next: {
      revalidate: 3600,
      tags: ['articles'],
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Admin() {
  const data = (await getData()) as Article[]

  return (
    <div className="h-full flex flex-col flex-1 container pt-12 lg:pt-20">
      <AdminBlock serverData={data} />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Language Mastery - Админ панель',
}
