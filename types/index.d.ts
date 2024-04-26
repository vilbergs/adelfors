export type Status = 'TODO' | 'DOING' | 'DONE'

export interface Task {
  id: string
  name: string
  status: Status
}
