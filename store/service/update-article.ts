import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { Article } from '@/types/article'
import { ThunkConfig } from '@/types/store-schema'

interface UpdateArticlePayload {
  id: string
  articleData: Partial<Article>
}

export const updateArticleById = createAsyncThunk<
  Article,
  UpdateArticlePayload,
  ThunkConfig<string>
>('articles/updateArticleById', async ({ id, articleData }, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const promise = extra.api.patch<Article>(`/articles/${id}`, articleData)

    const { data } = await toast.promise(promise, {
      loading: 'Обновление статьи...',
      success: 'Статья успешно обновлена',
      error: 'Произошла ошибка при обновлении статьи. Попробуйте позже',
    })

    console.log('update-article [data]', data)
    return data
  } catch (error) {
    console.log(error)
    return rejectWithValue("Couldn't update article")
  }
})
