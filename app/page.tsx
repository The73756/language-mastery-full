import { ArticleList } from '@/components/article-list'
import { Article } from '@/types/article'

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/articles?_sort=position')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data = (await getData()) as Article[]

  return <ArticleList serverData={data} />
}
