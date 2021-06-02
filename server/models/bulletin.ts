  import Sequelize from 'sequelize'
  import sequelize from './index'
  
  const bulletins = sequelize.define(
    'bulletins',
    {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      content : {
        type: Sequelize.STRING(45),
        allowNull: false,
      }
    },
    {
      tableName: 'bulletins',
      timestamps: false,
      paranoid: false,
    },
  )
  

  export default bulletins;
