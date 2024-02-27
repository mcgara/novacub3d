import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import compare from 'just-compare'

export const withRoot = (() => {
  const root = path.dirname(fileURLToPath(import.meta.url))
  return function (...paths: string[]): string {
    return path.normalize(path.join(root, ...paths))
  }
})()

export function onceCallFn<T extends (...args: any) => any> (fn: T): T {
  let value: undefined
  let isOnceCall = false

  return (function (...args: any): any {
    if (!isOnceCall) {
      value = fn(...args)
      isOnceCall = true
    }
    return value
  }) as T
}

export const useDotenv = onceCallFn(function () { dotenv.config() })

export function isFalsy (obj: unknown): boolean {
  return (
    [undefined, null, '', false, 0].includes(obj as any) ||
    compare(obj, []) || compare(obj, {}) ||
    Number.isNaN(obj)
  )
}

export function isTruthy (obj: unknown): boolean {
  return !isFalsy(obj)
}
