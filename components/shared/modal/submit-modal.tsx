import { Button } from '@/components/shared/button'
import { ModalWrapper, ModalWrapperProps } from '@/components/shared/modal/modal-wrapper'

interface SubmitModalProps extends ModalWrapperProps {
  text: string
  acceptText?: string
  rejectText?: string
  handleAccept: () => void
  handleReject?: () => void
}

export const SubmitModal = ({
  text,
  acceptText,
  rejectText,
  handleAccept,
  handleReject,
  onClose,
  ...props
}: SubmitModalProps) => {
  return (
    <ModalWrapper {...props} onClose={onClose}>
      <h2 className="text-primary text-24-700 mb-8 md:text-32-700">{text}</h2>
      <div className="flex gap-4 justify-start flex-wrap *:flex-[calc(50%-18px)]">
        <Button preset="accent" text={rejectText || 'Нет'} onClick={handleReject || onClose} />
        <Button preset="primary" text={acceptText || 'Да'} onClick={handleAccept} />
      </div>
    </ModalWrapper>
  )
}
