'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { RequireAuth } from '@/app/require-auth'
import { AddBlockModal } from '@/components/admin/add-block-modal'
import { AdminCardBlock } from '@/components/admin/admin-card-block'
import { AdminPromoBlock } from '@/components/admin/admin-promo-block'
import { AdminTextBlock } from '@/components/admin/admin-text-block'
import { Button } from '@/components/shared/button'
import { EmptyState } from '@/components/shared/empty-state'
import { ModalWrapper } from '@/components/shared/modal/modal-wrapper'
import { SubmitModal } from '@/components/shared/modal/submit-modal'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { useInitData } from '@/hooks/init-data'
import { selectIsArticleEmpty } from '@/store/article/selectors/article-selector'
import { userActions } from '@/store/user/slice/user-slice'
import { Article, ArticleType } from '@/types/article'
import { Routes } from '@/types/routes'

interface AdminBlockProps {
  serverData: Article[]
}

export const AdminBlock = ({ serverData }: AdminBlockProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const articlesData = useInitData(serverData)
  const isArticleEmpty = useSelector(selectIsArticleEmpty)

  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const handleLogout = () => {
    dispatch(userActions.logout())

    toast.success('Вы вышли из аккаунта')

    setIsSubmitModalOpen(false)
    router.push(Routes.HOME)
  }

  const renderBlocks = (article: Article) => {
    switch (article.type) {
      case ArticleType.PROMO:
        return <AdminPromoBlock key={article.id} {...article} />
      case ArticleType.TEXT:
        return <AdminTextBlock key={article.id} {...article} />
      case ArticleType.CARD:
        return <AdminCardBlock key={article.id} {...article} />
      default:
        return null
    }
  }

  return (
    <RequireAuth>
      <div className="flex-1 h-full flex flex-col">
        <h2 className="text-36-700 lg:text-48-700 mb-8 lg:mb-10 text-primary">
          Система управления
        </h2>

        <div className="flex flex-1 flex-col gap-5">
          {isArticleEmpty ? (
            <EmptyState title="Тут ничего нет!" desc="Добавь хоть что нибудь!" />
          ) : (
            articlesData.map((article) => renderBlocks(article))
          )}
        </div>

        <div className="my-8 lg:my-14 flex gap-2 lg:gap-4">
          <Button preset="accent" text="Добавить" onClick={() => setIsModalOpen(true)} />

          <Button preset="primary" text="Выйти" onClick={() => setIsSubmitModalOpen(true)} />
        </div>

        <ModalWrapper
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          wrapperClass="w-full max-w-[640px]"
        >
          <AddBlockModal />
        </ModalWrapper>

        <SubmitModal
          text="Вы действительно хотите выйти?"
          handleAccept={handleLogout}
          open={isSubmitModalOpen}
          acceptText="Выйти"
          rejectText="Остаться"
          onClose={() => setIsSubmitModalOpen(false)}
        />
      </div>
    </RequireAuth>
  )
}
