import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, PropsWithChildren } from 'react'
import { Icon } from '@/components/shared/icon'

interface ModalWrapperProps {
  open: boolean
  onClose: () => void
  wrapperClass?: string
}

export const ModalWrapper = ({
  onClose,
  open,
  children,
  wrapperClass,
}: PropsWithChildren<ModalWrapperProps>) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx([
                  'w-fit relative transform rounded-3xl bg-white py-8 px-6 md:py-11 md:px-14 text-left align-middle shadow-xl',
                  wrapperClass,
                ])}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute text-gray text-[20px] hover:text-black/60 transition-colors size-5 flex items-center justify-center top-4 right-4 md:top-7 md:right-7"
                >
                  <Icon name="shared/cross" />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
