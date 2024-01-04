export interface User {
  id: string
  username: string
}

export interface UserSchema {
  authData?: User
  username: string
  password: string
  isLoading: boolean
  error?: string
  _inited: boolean
}
