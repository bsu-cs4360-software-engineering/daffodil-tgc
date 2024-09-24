import express from 'express'
import Card from './Models/card.js'
import CardGetter from './dbManagement/getting_deck_of_cards.js';
const app = express();
const PORT = 3000;
const card = new Card(123,12,"This is an effect","potato");
const card_db = new CardGetter().get_cards();
app.get('/', (req, res) => {
  res.json(card_db);
});

app.listen(PORT, ()=>{
  console.log(`We are running on port ${PORT}`);
})