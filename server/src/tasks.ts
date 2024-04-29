import { Hono } from 'hono'
import { $Enums, PrismaClient } from '@prisma/client'
import { Task } from 'types'
import { HTTPException } from 'hono/http-exception'

const prisma = new PrismaClient()
const tasks = new Hono()

tasks.get('/', async (c) => {
  const tasks = await prisma.task.findMany()

  return c.json(tasks)
})

tasks.post('/', async (c) => {
  const body = await c.req.json<Omit<Task, 'id'>>()

  if (typeof body.name !== 'string') {
    throw new HTTPException(400, { message: 'Task name must be a string' })
  }

  if (!isStatus(body.status)) {
    throw new HTTPException(400, {
      message: 'Task status must be one of "todo", "doing" or "done"',
    })
  }

  const newTask = await prisma.task.create({
    data: {
      name: body.name,
      status: body.status,
    },
  })

  return c.json(newTask)
})

tasks.put('/:id', async (c) => {
  const { id } = c.req.param()
  const body = await c.req.json<Task>()

  if (typeof body.name !== 'string') {
    throw new HTTPException(400, { message: 'Task name must be a string' })
  }

  if (!isStatus(body.status)) {
    throw new HTTPException(400, {
      message: 'Task status must be one of "todo", "doing" or "done"',
    })
  }

  try {
    const newTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        name: body.name,
        status: body.status,
      },
    })

    return c.json(newTask)
  } catch (e) {
    throw new HTTPException(500, {
      message: 'Something went wrong',
    })
  }
})

function isStatus(status: unknown): status is $Enums.Status {
  if (typeof status !== 'string') {
    return false
  }

  return ['TODO', 'DOING', 'DONE'].includes(status)
}

export { tasks }
