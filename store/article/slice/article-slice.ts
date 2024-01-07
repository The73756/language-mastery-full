import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { customRevalidateTag } from '@/helpers/revalidate'
import { addArticle } from '@/store/service/add-article'
import { changeArticlePosition } from '@/store/service/change-position'
import { deleteArticleById } from '@/store/service/delete-article'
import { updateArticleById } from '@/store/service/update-article'
import { updateArticleCardById } from '@/store/service/update-article-card'
import { Article, ArticleSchema } from '@/types/article'

const initialState: ArticleSchema = {
  articleData: [],
  isLoading: false,
  error: undefined,
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
  extraReducers: (builder) => {
    builder
      .addCase(updateArticleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateArticleById.fulfilled, (state, action) => {
        customRevalidateTag('articles')

        state.isLoading = false
        state.articleData = state.articleData.map((article) =>
          article.id === action.payload.id ? action.payload : article,
        )
      })
      .addCase(updateArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateArticleCardById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateArticleCardById.fulfilled, (state, action) => {
        customRevalidateTag('articles')

        state.isLoading = false

        const article = state.articleData.find((article) => article.id === action.payload.articleId)
        if (article && article.type === 'CARD') {
          const card = article.cards.find((card) => card.id === action.payload.cardId)
          if (card) {
            const cardIndex = article.cards.indexOf(card)
            article.cards[cardIndex] = action.payload
          }
        }
      })
      .addCase(updateArticleCardById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(addArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        customRevalidateTag('articles')

        state.isLoading = false
        state.articleData = [...state.articleData, action.payload]
      })
      .addCase(addArticle.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(deleteArticleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteArticleById.fulfilled, (state, action) => {
        customRevalidateTag('articles')

        state.isLoading = false
        state.articleData = state.articleData.filter((article) => article.id !== action.meta.arg)
      })
      .addCase(deleteArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(changeArticlePosition.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changeArticlePosition.fulfilled, (state) => {
        customRevalidateTag('articles')

        state.isLoading = false
      })
      .addCase(changeArticlePosition.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleActions, reducer: articleReducer } = articleSlice
