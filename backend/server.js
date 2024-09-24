import express from 'express'
import Card from './Models/card.js'
import cardJSON from './db.json' assert {type : 'json'}

const app = express();
const PORT = 3000;
const card = new Card(123,12,"This is an effect","potato");
app.get('/', (req, res) => {
  res.json(cardJSON);
});

app.listen(PORT, ()=>{
  console.log(`We are running on port ${PORT}`);
})