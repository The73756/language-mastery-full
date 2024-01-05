import { RootState } from '@/store/config'

export const selectArticles = (state: RootState) => state.article.articleData
export const selectArticlesInited = (state: RootState) => state.article._inited
