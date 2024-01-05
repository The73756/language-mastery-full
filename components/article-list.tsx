'use client'

import { CardBlock } from '@/components/card-block'
import { PromoBlock } from '@/components/promo-block'
import { TextBlock } from '@/components/text-block'
import { useInitData } from '@/hooks/init-data'
import { Article, ArticleType } from '@/types/article'

interface ArticleListProps {
  serverData: Article[]
}

export const ArticleList = ({ serverData }: ArticleListProps) => {
  const articlesData = useInitData(serverData)

  const renderArticles = (article: Article) => {
    switch (article.type) {
      case ArticleType.PROMO:
        return <PromoBlock key={article.id} {...article} />
      case ArticleType.TEXT:
        return <TextBlock key={article.id} {...article} />
      case ArticleType.CARD:
        return <CardBlock key={article.id} {...article} />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col gap-14 md:gap-[80px] container pt-14 xl:pt-[100px] pb-20">
      {articlesData.map((article) => renderArticles(article))}
    </div>
  )
}
