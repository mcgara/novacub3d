import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    root: 'src/',
    include: ['db/test/*.{test,spec}.?(c|m)[jt]s?(x)']
  }
})
