const { Router } = require( 'express' );
const router = Router();
const Pool = require( '../database' );

//Get employees
router.get( '/employees', async ( req, res ) => {
    const response = await Pool.query( 'Select * from employees' );
    //console.log( response.rows )
    res.status(200).json(response.rows)
} );

//Create employee
router.post( '/add-employee',  async ( req, res ) => {
    const { first_name, last_name, job_id, manager_id, department_id, email, hire_date, salary } = req.body;
    const response = await
        Pool.query(
            'insert into employees(first_name, last_name, job_id, manager_id, department_id, email, hire_date, salary) values ($1,$2,$3,$4,$5,$6, $7, $8)',
            [first_name, last_name, job_id, manager_id, department_id, email, hire_date, salary]
        ) 
  res.status(201).json({"message": "the employee has been created with success!!", "body": {first_name, last_name}})
})
//Update employee

//Delete employee
router.delete( '/employees/:id', async ( req, res ) => {
    const { id } = req.params;
    await Pool.query('delete from employees where employee_id = $1', [id])
    res.status(200).json({"message": "the employee has been deleted with success"})
})
//Find employee by id



module.exports = router;