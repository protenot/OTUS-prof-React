import type { Task } from '../models/task.model'

export const TASKS: Task[] = [
  {
    id: '12345',
    description: 'Здесь будет задача 1',
    solution: 'Здесь будет решение задачи 1',
    complexity: 20,
    language: 'TypeScript',
    tag: 'Aлгоритмы'
  },
  {
    id: '12346',
    description: 'Здесь будет задача 2',
    solution: 'Здесь будет решение задачи 2',
    complexity: 15,
    language: 'JavaScript',
    tag: 'Cтруктуры данных'
  },
  {
    id: '12347',
    description: 'Здесь будет задача 3',
    solution: 'Здесь будет решение задачи 3',
    complexity: 5,
    language: 'JavaScript',
    tag: 'Динамическое программирование'
  }
]
