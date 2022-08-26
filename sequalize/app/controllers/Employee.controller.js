const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
	//Validate request

	//Create new employee
	const { first_name, last_name, email, phone_number } = req.body;
	const employee = {
		//model-field  : req.body field
		first_name: first_name,
		last_name: last_name,
		email: email,
		phone_number: phone_number,
	};
	//Save Employee
	Employee.create(employee)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "something went wrong" });
		});
};

//find employees
exports.findAll = (req, res) => {
	//var response = await Employee.findAll();
    Employee.
        findAll()
		.then((data) => res.send(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "something went wrong",
			});
		});
};

//update employees
exports.update = ( req, res ) => {
	const id = req.params.id;
	const fields = req.body;

	Employee.update( fields, {
		where: {employee_id : id}
	} ).then( response => {
		//console.log(response)
		res.send( {
			message: "The employee has been updated"
		} )
	} ).catch( err => {
		console.log(err)
		res.status( 500 ).send( {
			message: "something went wrong"
		})
	})


}
exports.delete = ( req, res ) => {
	const id = req.params.id;
	Employee.destroy( {
		where: {employee_id : id}
	} ).then( response => {
		res.send({message: "the employee has been removed!!"})
	} ).catch( err => {
		console.log(err)
		res.status( 500 ).send( {
			message: "something went wrong"
		})
	})
}

//find by employee id

