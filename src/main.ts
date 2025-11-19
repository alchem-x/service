import express from 'express'
import { resolve } from 'node:path'
import { createAPIRouter } from '#src/api-router.ts'

const APP_PORT = 3000

const main = (): void => {
  const app = express()

  app.use(createAPIRouter())
  app.use(express.static(resolve(import.meta.dirname, '..', 'public')))

  app.listen(APP_PORT, () => {
    console.log(`Service listening on port http://localhost:${APP_PORT}`)
  })
}

if (process.argv[1] === import.meta.filename) {
  main()
}
