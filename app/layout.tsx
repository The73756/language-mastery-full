import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import StoreProvider from '@/app/store-provider'
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
  openGraph: {
    title: 'Language Mastery',
    description:
      'Инновационный центр обучения языкам, который стремится изменить ваш подход к изучению и владению иностранными языками.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://language-mastery.vercel.app/',
    images: [
      'https://opengraph.b-cdn.net/production/documents/70474465-3d52-43fe-a3d0-887e797a2b73.png?token=0cOG9XVDNk9BCutCvHqQolCKTSHBcABBjLjESbJ-UYU&height=630&width=1200&expires=33240618707',
    ],
  },
  twitter: {
    title: 'Language Mastery',
    description:
      'Инновационный центр обучения языкам, который стремится изменить ваш подход к изучению и владению иностранными языками.',
    images: [
      'https://opengraph.b-cdn.net/production/documents/70474465-3d52-43fe-a3d0-887e797a2b73.png?token=0cOG9XVDNk9BCutCvHqQolCKTSHBcABBjLjESbJ-UYU&height=630&width=1200&expires=33240618707',
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col scrollbar-thumb-accent scrollbar-track-light-blue hover:scrollbar-thumb-accent-hover scrollbar scrollbar-thumb-rounded-full">
        <StoreProvider>
          <Header />
          <main className="flex-1 h-full flex flex-col">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
