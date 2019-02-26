import "babel-polyfill"
import './config/log'

import dotEnv from 'dotenv'
import express from 'express'
import compression from 'compression'
import http from 'http'
import bodyParser from 'body-parser'

import ApiRouter from './routes/ApiRouter'
import SocketHandler from  './watcher/SocketHandler'

const app = express()
const server = http.createServer(app)

dotEnv.config()
new SocketHandler(server)

app.enable('trust proxy')
app.use(compression())
app.set('trust proxy', 'loopback')
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/', ApiRouter)

console.log('APP is running!')
console.trace('APP reachable url: ' + process.env.APP_PORT || 8080)
server.listen(process.env.APP_PORT || 8080)