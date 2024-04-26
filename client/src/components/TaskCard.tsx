import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Task } from 'types'

interface TaskCardProps extends Task {
  className?: string
}

export const TaskCard = ({ id, name, className }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <Card
      className={className}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}
TaskCard.displayName = 'TaskCard'
