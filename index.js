const mongoose = require('mongoose')
const express = require('express')
const app = express()
const db = require('./config/keys').mongoURI
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql')

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch(err => console.log(err))

app.use(bodyParser.json())

app.use('/graphql', expressGraphQL({ graphiql: true }))

app.listen(5000, () => console.log('Server is running on port 5000'))
