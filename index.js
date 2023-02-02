const express = require("express")
const morgan = require('morgan')
const cors = require('cors')

const database = require("./config/bd")

const app = express()
const serverPort = 1112

app.use(morgan('tiny'))
app.use(cors('*'))
// XXXXXXX VOIR SI LES 2 LIGNES DESSOUS SONT NECESSAIRES AVEC MYSQL XXXXXXX
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
	// demander a la bdd
	//SELECT characters.*, houses.houseName FROM characters inner join houses on characters.houses_id = houses.id; ====> exemple de requête complexe
	database
		.query("SELECT * FROM XXXXXXXXXXX")
		.then(([xxxxxxxx]) => res.json(xxxxxxxx))
		.catch((err) => {
			console.error(err)
			res.status(500).send("Error retrieving data from database")
		})
})

app.listen(serverPort, console.log("http://localhost:1112"))
