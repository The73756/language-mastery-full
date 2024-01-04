'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AddBlockModal } from '@/components/admin/add-block-modal'
import { AdminCardBlock } from '@/components/admin/admin-card-block'
import { AdminPromoBlock } from '@/components/admin/admin-promo-block'
import { AdminTextBlock } from '@/components/admin/admin-text-block'
import { Button } from '@/components/shared/button'
import { ModalWrapper } from '@/components/shared/modal-wrapper'
import { useAppDispatch } from '@/hooks/app-dispatch'
import { userActions } from '@/store/user/slice/user-slice'
import { Routes } from '@/types/routes'

export const AdminBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(userActions.logout())
    router.push(Routes.HOME)
  }

  return (
    <div>
      <h2 className="text-36-700 lg:text-48-700 mb-8 lg:mb-10 text-primary">Система управления</h2>

      <div className="flex flex-col gap-5">
        <AdminPromoBlock />
        <AdminTextBlock />
        <AdminCardBlock />
      </div>

      <div className="my-8 lg:my-14 flex gap-2 lg:gap-4">
        <Button preset="accent" text="Добавить" onClick={() => setIsModalOpen(true)} />

        <Button preset="primary" text="Выйти" onClick={handleLogout} />
      </div>

      <ModalWrapper
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        wrapperClass="w-full max-w-[640px]"
      >
        <AddBlockModal />
      </ModalWrapper>
    </div>
  )
}
