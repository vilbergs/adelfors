import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { tasks } from './tasks'

const app = new Hono()
app.use('/api/*', cors())
app.use('/*', serveStatic({ root: './dist' }))

const api = app.basePath('/api')

api.route('/tasks', tasks)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: api.fetch,
  port,
})
