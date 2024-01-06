'use client'

import { useSelector } from 'react-redux'
import { CardBlock } from '@/components/card-block'
import { PromoBlock } from '@/components/promo-block'
import { EmptyState } from '@/components/shared/empty-state'
import { TextBlock } from '@/components/text-block'
import { useInitData } from '@/hooks/init-data'
import { selectIsArticleEmpty } from '@/store/article/selectors/article-selector'
import { Article, ArticleType } from '@/types/article'

interface ArticleListProps {
  serverData: Article[]
}

export const ArticleList = ({ serverData }: ArticleListProps) => {
  const articlesData = useInitData(serverData)
  const isArticleEmpty = useSelector(selectIsArticleEmpty)

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
    <div className="flex flex-1 h-full flex-col gap-14 md:gap-[80px] container pt-14 xl:pt-[100px] pb-20">
      {isArticleEmpty ? (
        <EmptyState title="Пока что тут ничего нет!" desc="Зайдите позже" />
      ) : (
        articlesData.map((article) => renderArticles(article))
      )}
    </div>
  )
}
