module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define( "employees", {
        //Map the fields from employees table

        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.INTEGER
        }
    } )
    return Employee
}