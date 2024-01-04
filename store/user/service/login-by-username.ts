import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from '@/constants/local-storage'
import { userActions } from '@/store/user/slice/user-slice'
import { ThunkConfig } from '@/types/store-schema'
import { User } from '@/types/user'

interface LoginByUsernamePayload {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernamePayload, ThunkConfig<string>>(
  'user/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.post<User>('/login', authData)

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))

      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue("Couldn't login")
    }
  },
)
