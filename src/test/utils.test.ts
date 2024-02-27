import { describe, it, expect } from 'vitest'
import { onceCallFn, useDotenv, isFalsy } from 'utils'

describe('onceCallFn', () => {
  it('should first parameter and return be of type function', () => {
    expect(onceCallFn(() => {})).toBeTypeOf('function')
  })

  it('should return function wrapped and when called return same value since first called', () => {
    const wrapped = onceCallFn(letters => letters)
    expect(wrapped('abc')).toBe('abc')
    expect(wrapped('bca')).toBe('abc')
  })
})

describe('useDotenv', () => {
  it('should enabled variables environment', () => {
    useDotenv()
    expect.soft(process.env.TEST_DOTENV).toBeDefined()
  })
})

describe('isFalsy', () => {
  it('should be a function', () => {
    expect(isFalsy).toBeTypeOf('function')
  })

  it('should return a boolean', () => {
    expect(isFalsy(undefined)).toBeTypeOf('boolean')
  })

  it('should return true if obj parameter is of type (undefined, null, [], 0, \'\', NaN, {}, [])', () => {
    expect(isFalsy(undefined)).toBe(true)
  })

  it('should return false if obj parameter is true', () => {
    expect(isFalsy(true)).toBe(false)
  })
})
