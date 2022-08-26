
module.exports = app => {
    const employees = require( "../controllers/Employee.controller" );
    var router = require( "express" ).Router();
    router.get( '/employees', employees.findAll );
    router.post( '/add-employee', employees.create );
    router.put( '/update-employee/:id', employees.update );
    router.delete( '/remove-emp/:id', employees.delete );
    app.use( '/api', router )  
};
