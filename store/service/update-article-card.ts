import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { BenefitsCard } from '@/types/benefits'
import { ThunkConfig } from '@/types/store-schema'

interface UpdateArticleCardPayload {
  articleId: string
  cardId: string
  cardData: Partial<BenefitsCard>
}

interface FulfilledActionPayload extends BenefitsCard {
  articleId: string
  cardId: string
}

export const updateArticleCardById = createAsyncThunk<
  FulfilledActionPayload,
  UpdateArticleCardPayload,
  ThunkConfig<string>
>('articles/updateCardById', async ({ articleId, cardId, cardData }, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  try {
    const promise = extra.api.patch<BenefitsCard>(
      `/articles/${articleId}/cards/${cardId}`,
      cardData,
    )

    const { data } = await toast.promise(promise, {
      loading: 'Обновление карточки...',
      success: 'Карточка успешно обновлена',
      error: 'Произошла ошибка при обновлении карточки. Попробуйте позже',
    })

    return { ...data, articleId, cardId }
  } catch (error) {
    console.log(error)
    return rejectWithValue("Couldn't update card")
  }
})
