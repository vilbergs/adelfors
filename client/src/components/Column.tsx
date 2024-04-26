import { cn } from '@/lib/utils'
import React from 'react'
import { useDroppable } from '@dnd-kit/core'

interface ColumnProps {
  id: string
  name: string
  className?: string
}

export const Column = ({
  id,
  name,
  children,
  className,
}: React.PropsWithChildren<ColumnProps>) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })

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

      <div
        className={cn(
          'flex-1 flex flex-col gap-4 rounded-md',
          isOver ? 'bg--500' : ''
        )}
        ref={setNodeRef}
      >
        {children}
      </div>
    </div>
  )
}
Column.displayName = 'Column'
