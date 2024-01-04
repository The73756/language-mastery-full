import Link from 'next/link'
import { Icon } from '@/components/shared/icon'
import { Routes } from '@/types/routes'
import { getHeaderLinks } from '@/utils/header'

export const Header = () => {
  const links = getHeaderLinks()

  return (
    <header className="h-header bg-primary text-white">
      <div className="container flex justify-between items-center h-full">
        <h1 className="font-poppins text-24-700">
          <Link href={Routes.HOME} className="flex items-center gap-2">
            <Icon className="text-[60px] md:text-[70px]" name="shared/logo-colored" />
            <span className="max-md:hidden">LanguageMastery</span>
          </Link>
        </h1>

        <div className="flex gap-2 md:gap-5">
          {links.map((link) => (
            <Link
              key={link.path}
              className="text-16-700 md:text-24-700 hover:underline"
              href={link.path}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
