const express = require('express');
const app = express();
const port = 8080;

//var name = "Rohith";

app.get('/', (req, res) => res.send('Hello All!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
