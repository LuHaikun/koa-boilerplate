import Sequelize from 'sequelize'
import sequelize from '../../db/connect'

export const Demo = sequelize.define('demo', {
  demo_name: Sequelize.STRING,
  is_delete: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time'
})

export const getById = (demoId) => {
  const result = Demo.findByPk(demoId)

  return result
}

Demo.sync()

export default {
  Demo,
  getById
}
