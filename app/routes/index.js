/**
 * @author 陆海鹍
 * @date 2019-06-25 16:10:02
 * @description 描述 初始化路由列表
 * @email luhaikun@cecdat.com
 * @copyright Copyright 2018 CEC(Fujian) Healthcare Big Data Operation Service Co., Ltd. All rights reserved.
 */
import routeItems from './routeItems'
import Router from 'koa-router'
import session from '../middleware/session'

const router = new Router()

router
  .use(session())

const addRouterToApp = routers => {
  routers.map(item => {
    switch (item.method) {
      case 'get':
        router.get(item.path, item.controller)
        break
      case 'post':
        router.post(item.path, item.controller)
        break
      case 'put':
        router.put(item.path, item.controller)
        break
      case 'delete':
        router.del(item.path, item.controller)
        break
      default:
        break
    }
    if (item.routes) {
      addRouterToApp(item.routes)
    }
  })
}

addRouterToApp(routeItems)

export default router
