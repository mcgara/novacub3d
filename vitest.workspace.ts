import { defineWorkspace, UserProjectConfigExport } from 'vitest/config'
import path from 'node:path'

type UserProjectConfig<T extends string> = Record<T, UserProjectConfigExport | string>
function defineProjects<T extends string> (config: UserProjectConfig<T>): UserProjectConfig<T> {
  return config
}

const patt = {
  $0: '*.{test,spec}.?(c|m)[jt]s?(x)'
}

const resolve = {
  alias: {
    '@': path.resolve(__dirname, './src')
  }
}

const projects = defineProjects({
  root: {
    test: {
      name: 'root',
      include: ['test/' + patt.$0]
    },
    resolve
  },
  db: {
    test: {
      name: 'db',
      include: ['test/db/' + patt.$0]
    },
    resolve
  }
})

export default defineWorkspace(Object.values(projects))
