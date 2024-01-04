import { RootState } from '@/store/config'

export const selectIsAuthenticated = (state: RootState) => state.user.authData !== undefined
export const selectUser = (state: RootState) => state.user
