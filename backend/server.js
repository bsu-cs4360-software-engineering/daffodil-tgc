import express from 'express'
import Card from './Models/card.js'
import card_router from './Routes/cards_router.js';
const app = express();
const PORT = 3000;

app.use('/cards',card_router)

app.listen(PORT, ()=>{
  console.log(`We are running on port ${PORT}`);
})