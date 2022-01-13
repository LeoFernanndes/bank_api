import { setupRoutes } from './routes'

import express, { json } from 'express'

const app = express()
app.use(json())
setupRoutes(app)

export default app