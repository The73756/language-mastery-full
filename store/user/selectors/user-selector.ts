import { RootState } from '@/store/config'

export const selectIsAuthenticated = (state: RootState) => state.user.authData !== undefined
export const selectUserPassword = (state: RootState) => state.user.password
export const selectUserUsername = (state: RootState) => state.user.username
