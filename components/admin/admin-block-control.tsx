import clsx from 'clsx'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ButtonIcon } from '@/components/shared/buttonIcon'
import { SubmitModal } from '@/components/shared/modal/submit-modal'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { changeArticlePosition } from '@/store/service/change-position'
import { deleteArticleById } from '@/store/service/delete-article'
import { Article } from '@/types/article'

interface AdminBlockControlProps {
  handleAccept?: () => void
  handleReject?: () => void
  className?: string
  isModified?: boolean
  showBlockControl?: boolean
  articleId?: Article['id']
  position?: Article['position']
}

export const AdminBlockControl = ({
  handleReject,
  handleAccept,
  className,
  isModified,
  articleId,
  showBlockControl = true,
}: AdminBlockControlProps) => {
  const dispatch = useAppDispatch()
  const [isShowSubmitModal, setIsShowSubmitModal] = useState(false)

  const handleMoveDown = () => {
    if (!articleId) {
      toast.error('Не удалось переместить блок')
      console.error('admin-block-control [handleMoveDown] articleId is not defined')
      return
    }

    dispatch(changeArticlePosition({ articleId, direction: 'down' }))
  }

  const handleMoveUp = () => {
    if (!articleId) {
      toast.error('Не удалось переместить блок')
      console.error('admin-block-control [handleMoveDown] articleId is not defined')
      return
    }

    dispatch(changeArticlePosition({ articleId, direction: 'up' }))
  }

  const handleRemoveArticle = () => {
    if (!articleId) {
      toast.error('Не удалось удалить блок')
      console.error('admin-block-control [handleRemove] articleId is not defined')
      return
    }

    dispatch(deleteArticleById(articleId))
  }

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
          onClick={() => setIsShowSubmitModal(true)}
          preset="accent"
          title="Удалить"
          iconName="shared/delete"
        />
      )}

      <SubmitModal
        text="Вы действительно хотите удалить блок?"
        open={isShowSubmitModal}
        onClose={() => setIsShowSubmitModal(false)}
        handleAccept={handleRemoveArticle}
        acceptText="Удалить"
        rejectText="Оставить"
      />
    </div>
  )
}
