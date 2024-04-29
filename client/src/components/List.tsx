import { cn } from '@/lib/utils'
import React from 'react'

interface ListProps {
  name: string
  className?: string
}

export const List = ({
  name,
  className,
  children,
}: React.PropsWithChildren<ListProps>) => {
  return (
    <div
      className={cn(
        'border rounded-md bg-zinc-950 dark:bg-zinc-900 p-4 flex flex-col',
        className
      )}
    >
      <div className={cn('text-lg text-zinc-200 font-medium mb-4 capitalize')}>
        {name}
      </div>

      <div className={cn('flex-1 flex flex-col gap-4 rounded-md')}>
        {children}
      </div>
    </div>
  )
}
List.displayName = 'List'
