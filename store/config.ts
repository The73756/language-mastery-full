import { configureStore } from '@reduxjs/toolkit'
import { $api } from '@/store/api'
import { articleReducer } from '@/store/article/slice/article-slice'
import { userReducer } from '@/store/user/slice/user-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      article: articleReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
