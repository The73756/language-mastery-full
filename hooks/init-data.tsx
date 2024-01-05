import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { selectArticles, selectArticlesInited } from '@/store/article/selectors/article-selector'
import { articleActions } from '@/store/article/slice/article-slice'
import { Article } from '@/types/article'

export const useInitData = (serverData: Article[]) => {
  const isArticlesInit = useSelector(selectArticlesInited)
  const dispatch = useAppDispatch()

  if (!isArticlesInit) {
    dispatch(articleActions.initArticles(serverData))
  }

  return useSelector(selectArticles)
}
