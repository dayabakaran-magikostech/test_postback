const express = require('express')
const app = express()
const port = 8000

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Hello World!');
})

app.post('/order-postback', (req, res) => {
	const originalBody = { ...req.body };
	console.log(req);
	// console.log(originalBody);
	res.status(200).send('OK');

})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});