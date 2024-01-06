import { Icon } from '@/components/shared/icon'

interface EmptyStateProps {
  title: string
  desc: string
}

export const EmptyState = ({ title, desc }: EmptyStateProps) => {
  return (
    <div className="h-full flex-1 justify-center flex items-center flex-col text-primary text-center">
      <Icon
        name="shared/logo"
        className="text-[80px] md:text-[100px] xl:text-[160px] mb-2 xl:mb-4"
      />
      <h1 className="text-26-700 md:text-32-700 xl:text-48-700">{title}</h1>
      <p className="text-18-700 md:text-24-700 xl:text-32-700">{desc}</p>
    </div>
  )
}
