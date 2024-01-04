import clsx from 'clsx'
import { ButtonIcon } from '@/components/shared/buttonIcon'

interface AdminBlockControlProps {
  handleMoveUp?: () => void
  handleMoveDown?: () => void
  handleRemove?: () => void
  className?: string
}

export const AdminBlockControl = ({
  handleRemove,
  handleMoveUp,
  handleMoveDown,
  className,
}: AdminBlockControlProps) => {
  return (
    <div className={clsx(['flex gap-2.5', className])}>
      <ButtonIcon type="button" onClick={handleMoveUp} preset="primary" iconName="shared/arrow" />
      <ButtonIcon
        type="button"
        onClick={handleMoveDown}
        preset="primary"
        iconName="shared/arrow"
        iconClass="rotate-180"
      />
      <ButtonIcon type="button" onClick={handleRemove} preset="accent" iconName="shared/cross" />
    </div>
  )
}
