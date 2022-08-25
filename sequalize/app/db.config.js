module.exports = {
	HOST: "localhost",
	USER: "postgres",
	PASSWORD: "oracle",
	DB: "HR",
	dialect: "postgres",
	ssl: true,
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
};
