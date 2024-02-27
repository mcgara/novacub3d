import { defineWorkspace, UserProjectConfigExport } from 'vitest/config'

type UserProjectConfig<T> = { [K in keyof T]: UserProjectConfigExport | string }
function defineProjects<T extends {}> (config: UserProjectConfig<T>): UserProjectConfig<T> {
  return config
}

const patt = {
  $0: '*.{test,spec}.?(c|m)[jt]s?(x)'
}

const projects = defineProjects({
  root: {
    test: {
      name: 'root',
      root: 'src/',
      include: ['test/' + patt.$0]
    }
  },
  packages: 'src/*/vitest.config.ts'
})

export default defineWorkspace(Object.values(projects))
