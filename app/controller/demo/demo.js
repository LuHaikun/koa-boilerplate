export default async ctx => {
  ctx.response.body = {
    code: 200,
    message: 'success',
    data: 'hello word'
  }
}
