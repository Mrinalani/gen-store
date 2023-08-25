const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Waiter = sequelize.define('waiter',{
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
},
Price:{
    type:Sequelize.INTEGER,
},
Dish:{
    type:Sequelize.STRING,
},
Table:{
    type:Sequelize.INTEGER,
}
})

module.exports = Waiter;