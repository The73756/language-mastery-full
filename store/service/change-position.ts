import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { articleActions } from '@/store/article/slice/article-slice'
import { RootState } from '@/store/config'
import { ThunkConfig } from '@/types/store-schema'

interface ChangeArticlePositionPayload {
  articleId: string
  direction: 'up' | 'down'
}

export const changeArticlePosition = createAsyncThunk<
  void,
  ChangeArticlePositionPayload,
  ThunkConfig<string>
>('articles/changeArticlePosition', async ({ articleId, direction }, thunkAPI) => {
  const { getState, dispatch, extra } = thunkAPI
  const state = getState() as RootState

  try {
    const articles = [...state.article.articleData]

    const articleIndex = articles.findIndex((article) => article.id === articleId)
    if (articleIndex === -1) {
      throw new Error('Article not found')
    }

    let targetIndex: number
    if (direction === 'up' && articleIndex > 0) {
      targetIndex = articleIndex - 1
    } else if (direction === 'down' && articleIndex < articles.length - 1) {
      targetIndex = articleIndex + 1
    } else {
      return
    }

    const newArticles = articles.map((article, index) => {
      if (index === articleIndex) {
        return { ...article, position: targetIndex + 1 }
      }
      if (index === targetIndex) {
        return { ...article, position: articleIndex + 1 }
      }
      return article
    })

    dispatch(articleActions.setArticles(newArticles.sort((a, b) => a.position - b.position)))

    const promise = Promise.all([
      extra.api.patch(`/articles/${newArticles[articleIndex].id}`, {
        position: newArticles[articleIndex].position,
      }),
      extra.api.patch(`/articles/${newArticles[targetIndex].id}`, {
        position: newArticles[targetIndex].position,
      }),
    ])

    await toast.promise(promise, {
      loading: 'Синхронизация',
      success: 'Позиции статей успешно синхронизированы',
      error: 'Произошла ошибка при синхронизации статей. Попробуйте позже',
    })
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue("Couldn't change article position")
  }
})
