import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article, ArticleSchema } from '@/types/article'

const initialState: ArticleSchema = {
  articleData: [],
  _inited: false,
}

export const articleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initArticles: (state, action: PayloadAction<Article[]>) => {
      state.articleData = action.payload
      state._inited = true
    },
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articleData = action.payload
    },
  },
})

export const { actions: articleActions, reducer: articleReducer } = articleSlice
