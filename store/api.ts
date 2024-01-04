'use client'

import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from '@/constants/local-storage'

const baseURL = 'http://localhost:5000'

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
