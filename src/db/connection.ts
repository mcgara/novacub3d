import { createConnection as mysqlConnection, Connection, ConnectionOptions } from 'mysql2/promise'

export async function createConnection (options: ConnectionOptions): Promise<Connection> {
  const connection = mysqlConnection(options)

  connection.catch(err => {
    // TODO: Implement best logger
    const msg = `DATABASE: ${(err as Error).message ?? 'Error to create connection in MySQL database.'}`
    console.error(msg, (err as Error).stack)
  })

  return await connection
}
