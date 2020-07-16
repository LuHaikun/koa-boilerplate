const env = process.env.DEPLOY_ENV || 'development'
const configs = require(`../configs/${env}`).default

export default configs
