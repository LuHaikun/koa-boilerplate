/**
 * @author 陆海鹍
 * @date 2019-06-25 16:29:44
 * @description 描述 空路由
 * @email luhaikun@cecdat.com
 * @copyright Copyright 2018 CEC(Fujian) Healthcare Big Data Operation Service Co., Ltd. All rights reserved.
 */

const emptyRoute = ctx => {
  ctx.response.body = 'Not Found'
}

export default emptyRoute
