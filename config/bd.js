require("dotenv").config()

const mysql = require("mysql2/promise")

const database = mysql.createPool({
	port: process.env.DB_PORT,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
})

database
	.getConnection()
	.then(() => console.log("Can reach database"))
	.catch((err) => {
		console.error(err)
	})

module.exports = database
