const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/demo', (req, res) => {
  console.log(req.body);
  res.send('Data Recieved!');
})

app.post('/add', (req, res) => {
  console.log(req.body);
  firstNumber = parseInt(req.body.firstNumber);
  secondNumber = parseInt(req.body.secondNumber);
  result = firstNumber + secondNumber;
  console.log(firstNumber, secondNumber, result);
  res.send('The result is ' + result);
})

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
})
