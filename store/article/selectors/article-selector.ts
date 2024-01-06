import { RootState } from '@/store/config'

export const selectArticles = (state: RootState) => state.article.articleData
export const selectArticlesInited = (state: RootState) => state.article._inited
export const selectIsArticleEmpty = (state: RootState) => state.article.articleData.length === 0

export const selectMaxPosition = (state: RootState) => {
  const positions = state.article.articleData.map((article) => article.position)
  return Math.max(...positions)
}
