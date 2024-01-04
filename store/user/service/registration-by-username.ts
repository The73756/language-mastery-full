import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from '@/constants/local-storage'
import { userActions } from '@/store/user/slice/user-slice'
import { ThunkConfig } from '@/types/store-schema'
import { User } from '@/types/user'

interface LoginByUsernamePayload {
  username: string
  password: string
}

export const registrationByUsername = createAsyncThunk<
  User,
  LoginByUsernamePayload,
  ThunkConfig<string>
>('user/registrationByUsername', async (regData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI

  try {
    const { data } = await extra.api.post<User>('/users', regData)

    console.log('registration-by-username [data]', data)

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))
    dispatch(userActions.setAuthData(data))

    return data
  } catch (error) {
    console.log(error)
    return rejectWithValue("Couldn't login")
  }
})
