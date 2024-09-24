import express from 'express'
import CardGetter from '../dbManagement/getting_deck_of_cards.js';

const app = express();
const card_router = express.Router();
const card_db = new CardGetter().get_cards();

card_router.get('/', (req,res) =>{
    res.json(card_db)
});


export default card_router