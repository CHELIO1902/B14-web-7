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
	Employee.findAll()
		.then((data) => res.send(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "something went wrong",
			});
		});
};

//update employees

//delete employees
