import { describe, it, expect } from 'vitest'
import { defaultOptions, createOptions, createOptionsEnv } from '@/db/options'

describe('defaultOptions', () => {
  it('should be a object of type mysql:ConnectionOptions', () => {
    expect(defaultOptions).toBeInstanceOf(Object)
  })

  it('should be a object frozen', () => {
    expect(Object.isFrozen(defaultOptions)).toBe(true)
  })
})

describe('createOptions', () => {
  it('should be a function that make mysql:ConnectionOptions with default values', () => {
    expect(createOptions()).toBeInstanceOf(Object)
  })
})

describe('createOptionsEnv', () => {
  it('should return a object of type mysql:ConnectionOptions with values from Env', () => {
    process.env.DB_HOST = 'http://test.env'
    expect(createOptionsEnv()).toMatchObject({ host: 'http://test.env' })
  })
})
