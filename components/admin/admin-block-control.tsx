import clsx from 'clsx'
import { ButtonIcon } from '@/components/shared/buttonIcon'

interface AdminBlockControlProps {
  handleMoveUp?: () => void
  handleMoveDown?: () => void
  handleRemove?: () => void
  handleAccept?: () => void
  handleReject?: () => void
  className?: string
  isModified?: boolean
  showBlockControl?: boolean
}

export const AdminBlockControl = ({
  handleRemove,
  handleMoveUp,
  handleMoveDown,
  handleReject,
  handleAccept,
  className,
  isModified,
  showBlockControl = true,
}: AdminBlockControlProps) => {
  return (
    <div className={clsx(['flex gap-2.5', className])}>
      {showBlockControl && (
        <>
          <ButtonIcon
            type="button"
            onClick={handleMoveUp}
            preset="primary"
            title="Переместить вверх"
            iconName="shared/arrow"
          />
          <ButtonIcon
            type="button"
            onClick={handleMoveDown}
            title="Переместить вниз"
            preset="primary"
            iconName="shared/arrow"
            iconClass="rotate-180"
          />
        </>
      )}
      {isModified && (
        <>
          <ButtonIcon
            type="submit"
            title="Сохранить"
            onClick={handleAccept}
            preset="success"
            iconName="shared/check"
          />
          <ButtonIcon
            type="button"
            title="Отменить"
            onClick={handleReject}
            preset="accent"
            iconName="shared/cross"
          />
        </>
      )}
      {showBlockControl && (
        <ButtonIcon
          type="button"
          onClick={handleRemove}
          preset="accent"
          title="Удалить"
          iconName="shared/delete"
        />
      )}
    </div>
  )
}
