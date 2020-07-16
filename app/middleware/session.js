import uuid from 'uuid/v1'

export default (opts) => {
  return async function (ctx, next) {
    const { session } = ctx
    if (!session.id) ctx.session.id = uuid()
    await next()
  }
}
