const { Router } = require("express");
const router = Router();
const Pool = require("../database");

//Get employees
router.get("/employees", async (req, res) => {
	const response = await Pool.query("Select * from employees");
	//console.log( response.rows )
	res.status(200).json(response.rows);
});

//Create employee
router.post("/add-employee", async (req, res) => {
	const {
		first_name,
		last_name,
		job_id,
		manager_id,
		department_id,
		email,
		hire_date,
		salary,
	} = req.body;
	const response = await Pool.query(
		"insert into employees(first_name, last_name, job_id, manager_id, department_id, email, hire_date, salary) values ($1,$2,$3,$4,$5,$6, $7, $8)",
		[
			first_name,
			last_name,
			job_id,
			manager_id,
			department_id,
			email,
			hire_date,
			salary,
		]
	);
	res.status(201).json({
		message: "the employee has been created with success!!",
		body: { first_name, last_name },
	});
});
//Update employee

//Delete employee
router.delete("/employees/:id", async (req, res) => {
	const { id } = req.params;
	await Pool.query("delete from employees where employee_id = $1", [id]);
	res
		.status(200)
		.json({ message: "the employee has been deleted with success" });
});
//Find employee by id

router.get("/findemployee/:id", async (req, res) => {
	console.log("finding");

	const { id } = req.params;

	const response = await Pool.query(
		"select * from employees where employee_id = $1",
		[id]
	);

	if (!response.rows.length) res.status(404).json({ message: "Employee not found" });

	res.status(200).json(response.rows);
});
//Update employee
router.put("/updatemployee/:id", async (req, res) => {
	const { id } = req.params;
	const {
		first_name,
		last_name,
		job_id,
		manager_id,
		department_id,
		email,
		hire_date,
		salary,
	} = req.body;
	//verify the employee before update 102
	const checkEmployee = await Pool.query(
		"select * from employees where employee_id = " + id
    );
	if (!checkEmployee.rows.length) {
		return res.status(404).json({ message: "Employee not found" });
    } 
        console.log( 'updating' )
        
		await Pool.query(
			"UPDATE employees SET first_name = $1, last_name = $2, job_id = $3, manager_id = $4, department_id = $5, email = $6, hire_date = $7, salary = $8 WHERE employee_id = $9",
			[
				first_name,
				last_name,
				job_id,
				manager_id,
				department_id,
				email,
				hire_date,
				salary,
				id,
			]
		);

		res
			.status(201)
			.json({ message: "the employee has been updated with success!!" });

} );

//Find all the employee working on the department_id = 10(employees)

//Find all the countries on europe (countries, regions)

module.exports = router;
