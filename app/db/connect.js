import Sequelize from 'sequelize'
import configs from '../configs'
const sequelize = new Sequelize(configs.dbConnect)

export default sequelize
