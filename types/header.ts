import { Routes } from '@/types/routes'

export interface HeaderLink {
  path: (typeof Routes)[keyof typeof Routes]
  text: string
}
