import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { ThunkConfig } from '@/types/store-schema'

export const deleteArticleById = createAsyncThunk<void, string, ThunkConfig<string>>(
  'articles/deleteArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const promise = extra.api.delete(`/articles/${articleId}`)

      await toast.promise(promise, {
        loading: 'Удаление статьи...',
        success: 'Статья успешно удалена',
        error: 'Произошла ошибка при удалении статьи. Попробуйте позже',
      })
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't delete article")
    }
  },
)
