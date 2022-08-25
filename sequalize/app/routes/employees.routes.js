
module.exports = app => {
    const employees = require( "../controllers/Employee.controller" );
    var router = require( "express" ).Router();
    router.get( '/employees', employees.findAll );
    router.post( '/add-employee', employees.create );
    app.use( '/api', router )  
};
