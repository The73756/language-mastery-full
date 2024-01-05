'use client'

import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from '@/constants/local-storage'

const baseURL = process.env.NEXT_PUBLIC_API_URL

let headers = {}

// Check if window is defined (we are on client side)
if (typeof window !== 'undefined') {
  headers = {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  }
}

export const $api = axios.create({
  baseURL,
  headers,
})
