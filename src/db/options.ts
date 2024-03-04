import type { ConnectionOptions } from 'mysql2'
import { env } from 'process'
import { isTruthy } from '@/utils'

export const defaultOptions: ConnectionOptions = {
  host: '127.0.0.1',
  port: 3306,
  database: 'novacub3d',
  user: 'root',
  password: 'root',
  debug: false
}

Object.freeze(defaultOptions)

export function createOptions (options?: Partial<ConnectionOptions>): ConnectionOptions {
  return { ...defaultOptions, ...options }
}

export const keysEnvOptions = {
  host: 'DB_HOST',
  port: 'DB_PORT',
  database: 'DB_NAME',
  user: 'DB_USER',
  password: 'DB_PASSWORD',
  debug: 'DB_DEBUG'
}

Object.freeze(keysEnvOptions)

export function createOptionsEnv (options?: Partial<ConnectionOptions>): ConnectionOptions {
  let optionsEnv = Object
    .entries(keysEnvOptions)
    .reduce((p, c) => (isTruthy(env[c[1]]) ? { ...p, [c[0]]: env[c[1]] } : p), {})

  optionsEnv = {
    ...optionsEnv,
    ...options
  }

  return createOptions(optionsEnv)
}
