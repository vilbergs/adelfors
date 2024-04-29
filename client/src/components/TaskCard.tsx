import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { Task } from 'types'

interface TaskCardProps extends Task {
  className?: string
  onChange: (task: Task) => void
}

export const TaskCard = ({
  id,
  name,
  status,
  className,
  onChange,
}: TaskCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4',
        className
      )}
    >
      <Checkbox
        id={`task_checkbox_${id}`}
        checked={status === 'DONE'} // TODO: implement isComplete
        onCheckedChange={(checked) =>
          onChange({ id, name, status: checked ? 'DONE' : 'TODO' })
        }
      />
      <label
        htmlFor={`task_checkbox_${id}`}
        className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {name}
      </label>
    </div>
  )
}
TaskCard.displayName = 'TaskCard'
