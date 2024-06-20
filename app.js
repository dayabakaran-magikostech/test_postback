const express = require('express')
const app = express()
const port = 9000

app.get('/order-postback', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});