const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
	res.json({
		title: 'Hello World',
		date: 'Today'
	})
});
app.post('/', (req, res) => {
	res.json({
		username: 'grace',
		email: 'sample@g.g',
		password: 'fds'
	})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))