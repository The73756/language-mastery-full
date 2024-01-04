import { AxiosInstance } from 'axios'
import { UserSchema } from '@/types/user'

export interface StateSchema {
  user: UserSchema
}

// export interface ReducerManager {
//   getReducerMap: () => ReducersMapObject<StateSchema>
//   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema, StateSchemaKey,>
//   add: (key: StateSchemaKey, reducer: Reducer) => void
//   remove: (key: StateSchemaKey) => void
// }
//
// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//   reducerManager: ReducerManager
// }

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
