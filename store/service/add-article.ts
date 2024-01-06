import { createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { selectMaxPosition } from '@/store/article/selectors/article-selector'
import { RootState } from '@/store/config'
import { Article, ArticleCard, ArticlePromo, ArticleText, ArticleType } from '@/types/article'
import { BenefitsCard, CardIcon } from '@/types/benefits'
import { ThunkConfig } from '@/types/store-schema'

interface AddArticlePayload {
  articleType: keyof typeof ArticleType
}

const ArticlePromoPlaceholder = {
  type: ArticleType.PROMO,
  imageUrl: '',
  title: '',
  subtitle: '',
  buttonText: '',
} as ArticlePromo

const ArticleTextPlaceholder = {
  type: ArticleType.TEXT,
  title: '',
  subtitle: '',
  text: '',
  direction: 'left',
  buttonText: '',
  buttonLink: '',
  imageUrl: '',
} as ArticleText

const ArticleCardPlaceholder = {
  type: ArticleType.CARD,
  title: '',
  cards: Array.from(
    { length: 3 },
    (_, index) =>
      ({
        id: String(index + 1),
        title: '',
        icon: '' as CardIcon,
        benefits: [],
        isPopular: false,
        price: '',
        duration: '',
      }) as BenefitsCard,
  ),
} as ArticleCard

export const addArticle = createAsyncThunk<Article, AddArticlePayload, ThunkConfig<string>>(
  'articles/addArticle',
  async ({ articleType }, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const state = getState() as RootState
    let maxPosition = selectMaxPosition(state) + 1
    console.log('add-article [max]', maxPosition)

    try {
      let articleData: Article

      switch (articleType) {
        case ArticleType.PROMO:
          articleData = ArticlePromoPlaceholder
          break
        case ArticleType.TEXT:
          articleData = ArticleTextPlaceholder
          break
        case ArticleType.CARD:
          articleData = ArticleCardPlaceholder
          break
        default:
          throw new Error(`Unsupported article type: ${articleType}`)
      }

      const promise = extra.api.post<Article>('/articles', {
        ...articleData,
        position: maxPosition,
      })

      const { data } = await toast.promise(promise, {
        loading: 'Добавление блока...',
        success: 'Блок успешно добавлен',
        error: 'Произошла ошибка при добавлении блока. Попробуйте позже',
      })

      maxPosition++

      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't add article")
    }
  },
)
