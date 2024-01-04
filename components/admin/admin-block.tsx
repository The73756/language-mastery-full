'use client'

import { useState } from 'react'
import { AddBlockModal } from '@/components/admin/add-block-modal'
import { AdminCardBlock } from '@/components/admin/admin-card-block'
import { AdminPromoBlock } from '@/components/admin/admin-promo-block'
import { AdminTextBlock } from '@/components/admin/admin-text-block'
import { Button } from '@/components/shared/button'
import { ModalWrapper } from '@/components/shared/modal-wrapper'

export const AdminBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <h2 className="text-36-700 lg:text-48-700 mb-8 lg:mb-10 text-primary">Система управления</h2>

      <div className="flex flex-col gap-5">
        <AdminPromoBlock />
        <AdminTextBlock />
        <AdminCardBlock />
      </div>

      <Button
        preset="accent"
        text="Добавить"
        className="my-8 lg:my-14"
        onClick={() => setIsModalOpen(true)}
      />

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
