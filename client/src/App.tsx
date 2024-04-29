import { useEffect, useState } from 'react'
import { Task } from 'types'
import { List } from '@/components/List'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TaskCard } from '@/components/TaskCard'

const API_PATH = 'http://localhost:3000/api'

const taskApi = {
  async all() {
    const tasks = await fetch(`${API_PATH}/tasks`).then((res) => res.json())

    return tasks as Task[]
  },
  async create(task: Omit<Task, 'id'>) {
    const newTask = await fetch(`${API_PATH}/tasks`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    }).then((res) => res.json())

    return newTask as Task
  },
  async update(task: Task) {
    const newTask = await fetch(`${API_PATH}/tasks/${task.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    }).then((res) => res.json())

    return newTask as Task
  },
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskName, setNewTaskName] = useState('')

  useEffect(() => {
    taskApi.all().then((tasks) => setTasks(tasks))
  }, [])

  const createTask = async () => {
    const newTask = await taskApi.create({ name: newTaskName, status: 'TODO' })

    setTasks((tasks) => {
      return [...tasks, newTask]
    })
  }

  const updateTask = async (task: Task) => {
    const newTask = await taskApi.update(task)

    setTasks((tasks) => {
      return tasks.map((task) => {
        return task.id === newTask.id ? newTask : task
      })
    })
  }

  return (
    <div className="max-w-md mx-auto grid grid-cols-1 gap-10 p-4 lg:p-8">
      <div className="flex gap-6 items-center">
        <Input
          value={newTaskName}
          placeholder="Task name"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Button onClick={createTask}>Add Task</Button>
      </div>
      <div className="flex gap-6 items-center">
        <List
          name="Todo"
          className={cn('flex-1 lg:row-start-2 min-h-96 lg:min-h-[800px]')}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} onChange={updateTask} />
          ))}
        </List>
      </div>
    </div>
  )
}

export default App
