import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_COOKIE_KEY, USER_LOCAL_STORAGE_KEY } from '@/constants/local-storage'
import { getCookieValue } from '@/helpers/getCookieValue'
import { registrationByUsername } from '@/store/user/service/registration-by-username'
import { User, UserSchema } from '@/types/user'
import { loginByUsername } from '../service/login-by-username'

const initialState: UserSchema = {
  isLoading: false,
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      if (typeof window !== 'undefined') {
        const date = new Date()
        date.setMonth(date.getMonth() + 1)
        document.cookie = `${USER_COOKIE_KEY}=true; expires=${date.toUTCString()}; path=/`
      }
    },
    initUserData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
      const cookieValue = getCookieValue(USER_COOKIE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }

      if (cookieValue === null || cookieValue === 'false') {
        state.authData = undefined
        localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
      }

      state._inited = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
      if (typeof window !== 'undefined') {
        document.cookie = `${USER_COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(registrationByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(registrationByUsername.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(registrationByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice
