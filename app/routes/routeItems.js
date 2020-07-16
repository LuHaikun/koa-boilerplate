import EmptyRoute from './EmptyRoute'
import Demo from '../controller/demo/demo'

export default [
  {
    path: '/V1.0/demo',
    method: 'get',
    desc: '示例',
    controller: EmptyRoute,
    routes: [
      {
        path: '/V1.0/demo/idnex',
        method: 'get',
        desc: '示例-子路由',
        controller: Demo
      }
    ]
  }
]
