import clsx from 'clsx'
import { Icon } from '@/components/shared/icon'

interface ModifiedBadgeProps {
  isModified: boolean
}

export const ModifiedBadge = ({ isModified }: ModifiedBadgeProps) => {
  return (
    <div
      className={clsx([
        'flex items-center justify-center w-8 h-8 bg-green translate-x-1/3 -translate-y-1/2 rounded-full absolute right-0 top-0 text-20-700 text-white transition-transform',
        { 'scale-1 visible': isModified },
        { 'scale-0 invisible': !isModified },
      ])}
    >
      <Icon name="shared/updated" />
      <div className="sr-only">Обновлено</div>
    </div>
  )
}
