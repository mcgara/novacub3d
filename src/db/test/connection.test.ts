import { describe, it, expect } from 'vitest'
import { createConnection } from 'db/connection'

describe('createConnection', () => {
  it('should throw connection error if not have a config', async () => {
    await expect.soft(async () => await createConnection({})).rejects.toThrowError()
  })
})
