import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})
const poppins = Poppins({ subsets: ['latin'], weight: ['700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Language Mastery',
  description:
    'Инновационный центр обучения языкам, который стремится изменить ваш подход к изучению и владению иностранными языками.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 h-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
