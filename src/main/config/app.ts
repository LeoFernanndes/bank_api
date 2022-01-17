import { setupRoutes } from './routes'

import express, { json } from 'express'
var cors = require('cors')

const app = express()
app.use(json())
app.use(cors())
setupRoutes(app)

export default app