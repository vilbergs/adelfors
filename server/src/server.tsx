import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Task } from 'types'

const app = new Hono()

app.use('/api/*', cors())

const api = app.basePath('/api')

app.use('/*', serveStatic({ root: './dist' }))

const tasks: Task[] = [
  {
    id: 'a',
    name: 'Add CREATE functionality',
    status: 'todo',
  },
  {
    id: 'b',
    name: 'Add READ functionality',
    status: 'doing',
  },
  {
    id: 'c',
    name: 'Add UPDATE functionality',
    status: 'todo',
  },
  {
    id: 'd',
    name: 'Add DELETE functionality',
    status: 'todo',
  },
]

api
  .get('/tasks', (c) => {
    return c.json(tasks)
  })
  .post('/')

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: api.fetch,
  port,
})
