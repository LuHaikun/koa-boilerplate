import Koa from 'koa'
import route from './routes'
import koaBody from 'koa-body'
import session from 'koa-session'
import cors from 'koa2-cors'
import logger from 'koa-logger'
import configs from './configs'
import './db'

const app = new Koa()

global.baseDir = __dirname

app.keys = [configs.sessionKey]

const sessionConfig = {
  key: configs.sessionKey, /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 30 * 60 * 1000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false) */
}

const corsConfig = {
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 600,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}
app
  .use(koaBody()) // 配置请求体
  .use(cors(corsConfig))
  .use(session(sessionConfig, app))
  .use(logger())
  .use(route.routes(), route.allowedMethods())

app.listen(configs.port)
