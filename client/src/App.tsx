import { useEffect, useState } from 'react'
import { Status, Task } from 'types'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Column } from '@/components/Column'
import { DndContext, DragEndEvent, useDroppable } from '@dnd-kit/core'
import { TaskCard } from '@/components/TaskCard'

const API_PATH = 'http://localhost:3000/api'

const getTasks = async () => {
  const tasks = await fetch(`${API_PATH}/tasks`).then((res) => res.json())

  return tasks as Task[]
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks))
  }, [])

  const tasksByStatus = tasks.reduce<Record<Status, Task[]>>(
    (map, task) => {
      map[task.status].push(task)

      return map
    },
    { todo: [], doing: [], done: [] }
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over?.id) {
      return
    }

    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === active.id) {
          return {
            ...task,
            status: over.id as Status,
          }
        }

        return task
      })
    })
  }

  return (
    <div className="flex p-4 gap-12 max-w-screen-2xl mx-auto min-h-96">
      <DndContext onDragEnd={handleDragEnd}>
        {Object.entries(tasksByStatus).map(([status, tasks]) => (
          <Column key={status} id={status} name={status} className="flex-1">
            {tasks.map((task) => (
              <TaskCard key={task.id} {...task}></TaskCard>
            ))}
          </Column>
        ))}
      </DndContext>
    </div>
  )
}

export default App
