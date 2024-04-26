export type Status = 'todo' | 'doing' | 'done'

export interface Task {
  id: string
  name: string
  status: Status
}
