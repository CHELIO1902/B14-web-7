const dbConfig = require( '../db.config' );
const Sequelize = require( 'sequelize' );

const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases :false
} );

//connection between ORM -> Model
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;  // {Sequelize: Sequelize, sequelize: sequelize}
db.employees = require( "./Employee" )( sequelize, Sequelize )
module.exports = db